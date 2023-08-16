import { Schema, model, models } from "mongoose"

const googleAuthUserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  image: {
    type: String
  },
  // status: {
  //   type: String
  // },
  // expires: {
  //   type: Date
  // },
});

export default models.GoogleAuthUser ||
  model("googleAuthUser", googleAuthUserSchema); 