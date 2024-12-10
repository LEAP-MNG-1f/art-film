// import { MongoClient } from "mongodb";

// const connectString =
//   "mongodb+srv://theotgonbaatar56:YXjGni3aMHaC35TW@otgonbaatar-test.7rcg2.mongodb.net/";

// const connectDB = async () => {
//   const client = new MongoClient(connectString);
//   let connection;

//   try {
//     connection = await client.connect();
//   } catch (error) {
//     console.log(error);
//   }
//   const db = connection.db("food-delivery");
//   return db;
// };

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("\x1b[32m✅ MongoDB амжилттай холбогдлоо\x1b[0m");
  } catch (error) {
    console.error("\x1b[31m❌ MongoDB холболтын алдаа:\x1b[0m", error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.warn("\x1b[33m⚠️ MongoDB холболт тасарлаа\x1b[0m");
});

mongoose.connection.on("reconnected", () => {
  console.log("\x1b[32m🔄 MongoDB дахин холбогдлоо\x1b[0m");
});

export default connectDB;
