import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return Promise.resolve();
    if (!MONGODB_URI) throw new Error('MongoDB URI is missing');
    return mongoose.connect(MONGODB_URI);
};

export const disconnectDB = async () => {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }
};

export async function withDBConnection(fn:()=> Promise <any>) {
    try {
        await connectDB();
        return await fn();
    } catch (error) {
        return null;
    }
}
