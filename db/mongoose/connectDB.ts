import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return Promise.resolve();
    if (!MONGODB_URI) throw new Error('MongoDB URI is missing');
    return mongoose.connect(MONGODB_URI);
};

export default connectDB;
