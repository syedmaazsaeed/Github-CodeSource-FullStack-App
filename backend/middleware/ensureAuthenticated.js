export async function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect(process.env.CLIENT_BASE_URL + "/login");
}


import rateLimit from 'express-rate-limit';
import { createLogger, transports, format } from 'winston';

// Setup logger
const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.colorize(),
		format.timestamp(),
		format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
	),
	transports: [
		new transports.Console(),
		new transports.File({ filename: 'auth-middleware.log' })
	],
});

// Rate limiter to prevent brute-force attempts (Optional)
const authRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // limit each IP to 10 requests per windowMs
	message: 'Too many authentication attempts from this IP, please try again after 15 minutes.',
	standardHeaders: true,
	legacyHeaders: false,
});

// Enhanced Authentication Middleware
export async function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	// Log unauthorized attempt
	logger.warn(`Unauthorized access attempt from IP: ${req.ip}, URL: ${req.originalUrl}`);

	// Handle API and Web-based responses differently
	if (req.is('application/json')) {
		// For API requests, return a JSON response
		return res.status(401).json({
			error: 'User not authenticated. Please log in.',
			redirectUrl: process.env.CLIENT_BASE_URL + '/login',
		});
	} else {
		// For web-based requests, redirect to the login page
		return res.redirect(`${process.env.CLIENT_BASE_URL}/login`);
	}
}

// Middleware usage example with rate limiting (optional)
export function applyMiddlewares(app) {
	app.use('/auth-required-endpoint', authRateLimiter, ensureAuthenticated);
}
