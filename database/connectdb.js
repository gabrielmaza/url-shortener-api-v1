import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("Connet DB ok 😎");
} catch (error) {
  console.log("Connet mongo DB error: ", error);
}

mongoose.connect(process.env.URI_MONGO);
