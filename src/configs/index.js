export { default as swaggerConfig } from "./swagger.js";
export { default as logger } from "./logger.js";

import { config } from "dotenv";
config();

const {
  DB_URI,
  PORT,
  JWT_SECRET_KEY,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  BUCKET_NAME,
} = process.env;

export const port = PORT || 2000;
export const jwtSecretKey = JWT_SECRET_KEY;
export const dbUri = DB_URI ?? "mongodb://localhost:27017/node-boilerplate";
export const awsAccessKey = AWS_ACCESS_KEY_ID;
export const awsSecretAccessKey = AWS_SECRET_ACCESS_KEY;
export const awsRegion = AWS_REGION;
export const bucketName = BUCKET_NAME;
export const prefix = "/api"; // prefix for api uri
