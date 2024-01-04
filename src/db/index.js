import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Connect to the MongoDB database
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`);

        // Log a successful connection
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance);

        // Optionally, you may want to set up additional configurations or handlers here

    } catch (error) {
        // Log the error
        console.error("MONGODB connection Error: ", error);
        
        // Instead of forcefully exiting the process, consider logging the error
        // and allowing the application to continue serving other requests.
        // process.exit(1); // Commented out to avoid terminating the entire process
        // Optionally, you can throw the error to be caught and handled by higher-level error handlers
        throw error;
    }
}

export default connectDB;
