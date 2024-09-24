import mongoose from 'mongoose';

export default async function connectMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
}

import mongoose from 'mongoose';

// Function to handle MongoDB connection events
function handleConnectionEvents() {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully.');
    });

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB disconnected.');
    });

    mongoose.connection.on('reconnected', () => {
        console.log('MongoDB reconnected.');
    });

    mongoose.connection.on('close', () => {
        console.log('MongoDB connection closed.');
    });
}

export default async function connectMongoDB(retries = 5, delay = 5000) {
    let attempts = 0;

    // Retry logic
    while (attempts < retries) {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false, // Additional mongoose options for backward compatibility
            });
            console.log('MongoDB Connected Successfully');
            handleConnectionEvents(); // Register event listeners after successful connection
            break;
        } catch (error) {
            attempts += 1;
            console.error(
                `Attempt ${attempts} - Error connecting to MongoDB: ${error.message}`
            );

            // Exit if retries are exhausted
            if (attempts >= retries) {
                console.error('Failed to connect to MongoDB after several attempts.');
                process.exit(1); // Exit the process if connection fails completely
            } else {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
}

// Gracefully close connection when app shuts down
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to app termination.');
    process.exit(0);
});



import mongoose from 'mongoose';
import { createLogger, transports, format } from 'winston';

// Setup a Winston logger for better log management
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'mongo-connection.log' })
    ],
});

// Function to handle MongoDB connection events
function handleConnectionEvents() {
    mongoose.connection.on('connected', () => {
        logger.info('MongoDB connected successfully.');
    });

    mongoose.connection.on('error', (err) => {
        logger.error(`MongoDB connection error: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
        logger.warn('MongoDB disconnected.');
    });

    mongoose.connection.on('reconnected', () => {
        logger.info('MongoDB reconnected.');
    });

    mongoose.connection.on('close', () => {
        logger.info('MongoDB connection closed.');
    });
}

// Exponential backoff helper
async function wait(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

export default async function connectMongoDB(retries = 5, delay = 5000) {
    let attempts = 0;

    if (mongoose.connection.readyState === 1) {
        logger.info('MongoDB is already connected, skipping connection attempt.');
        return;
    }

    // Retry logic with exponential backoff
    while (attempts < retries) {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
                serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds if server is not found
                socketTimeoutMS: 45000,          // Close sockets after 45 seconds of inactivity
                poolSize: 10,                    // Maintain up to 10 socket connections
            });

            logger.info('MongoDB Connected Successfully');
            handleConnectionEvents(); // Register event listeners after successful connection
            break;
        } catch (error) {
            attempts += 1;
            logger.error(`Attempt ${attempts} - Error connecting to MongoDB: ${error.message}`);

            // Exit if retries are exhausted
            if (attempts >= retries) {
                logger.error('Failed to connect to MongoDB after several attempts.');
                process.exit(1); // Exit the process if connection fails completely
            } else {
                const currentDelay = delay * Math.pow(2, attempts - 1); // Exponential backoff
                logger.info(`Retrying in ${(currentDelay / 1000).toFixed(2)} seconds...`);
                await wait(currentDelay); // Wait for the exponential backoff delay
            }
        }
    }
}

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    logger.info('MongoDB connection closed due to app termination.');
    process.exit(0);
});

// Health check function to monitor MongoDB connection status
export function checkMongoDBHealth() {
    const state = mongoose.connection.readyState;

    switch (state) {
        case 0:
            return 'disconnected';
        case 1:
            return 'connected';
        case 2:
            return 'connecting';
        case 3:
            return 'disconnecting';
        default:
            return 'unknown';
    }
}

// Additional utility to disconnect from MongoDB
export async function disconnectMongoDB() {
    try {
        await mongoose.connection.close();
        logger.info('MongoDB connection closed manually.');
    } catch (error) {
        logger.error('Error closing MongoDB connection: ' + error.message);
    }
}

