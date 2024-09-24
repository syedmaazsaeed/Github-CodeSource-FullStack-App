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
