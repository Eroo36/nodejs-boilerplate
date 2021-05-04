import express from "express";
import { port } from "./configs/index.js";
import loader from "./loaders/index.js";

const app = express();

loader(app);

// app.use(express.static("folder_name")); // use it to share static files

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});

export default app;
