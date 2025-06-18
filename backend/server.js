import express from 'express'
import connectDB from './config/db.js'
import cors from 'cors'
import authRouter from './routes/authRoutes.js';
import listingRouter from './routes/listingRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import 'dotenv/config'

const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 4000;

    const app = express();


    app.use(cors());
    app.use(express.json());


    app.use('/api/auth', authRouter);
    app.use('/api/listings', listingRouter);
    app.use('/api/bookings', bookingRouter);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();