import mongoose from "mongoose";

import { dbUri } from "../configs/index.js";

export default async () => {
  const db = await mongoose
    .connect(dbUri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .catch((err) => {
      console.log(err);
    });

  if (db) {
    console.log("Connected to Mongodb");
  }
};
