import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      dbName: "LangAI",
    })
    console.log("Connected to DB")
  } catch (error) {
    console.log("error", error)
  }
}
