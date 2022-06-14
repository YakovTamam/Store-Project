import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`.green.inverse.bold);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.inverse.bold);
    //Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
