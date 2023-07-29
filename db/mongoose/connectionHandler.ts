import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export const connectDB = async () => {
    console.log('uri', MONGODB_URI);
    if (mongoose.connection.readyState >= 1) return Promise.resolve();
    if (!MONGODB_URI) throw new Error('MongoDB URI is missing');
    return mongoose.connect(MONGODB_URI);
};

export const disconnectDB = async () => {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }
};
