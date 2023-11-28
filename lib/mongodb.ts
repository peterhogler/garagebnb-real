import mongoose, { ConnectOptions } from "mongoose";

export const connectWithMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connected to MongoDB");
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error connecting to MongoDB:", error.message);
        } else {
            console.error("An unknown error occurred while connecting to MongoDB.");
        }
    }
};
