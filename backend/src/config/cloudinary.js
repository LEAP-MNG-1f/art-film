import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const configureCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("\x1b[32m✅ Cloudinary амжилттай тохируулагдлаа\x1b[0m");
  } catch (error) {
    console.error("\x1b[31m❌ Cloudinary тохиргооны алдаа:\x1b[0m", error);
  }
};

export default configureCloudinary;
