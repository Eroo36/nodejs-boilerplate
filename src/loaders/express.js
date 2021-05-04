import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import helmet from "helmet";
import { prefix } from "../configs/index.js";
import { routes } from "../api/v1/index.js";
import { logger } from "../configs/index.js";
import { jwtSecretKey } from "../configs/index.js";

export default (app) => {
  process.on("uncaughtException", async (error) => {
    logger("00001", "", error.message, "Uncaught Exception", "");
  });

  process.on("unhandledRejection", async (ex) => {
    logger("00002", "", ex.message, "Unhandled Rejection", "");
  });

  if (!jwtSecretKey) {
    logger("00003", "", "Jwtprivatekey is not defined", "Process-Env", "");
    process.exit(1);
  }

  app.enable("trust proxy");
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(helmet());
  app.use(compression());
  app.use(express.static("public"));
  app.disable("x-powered-by");
  app.disable("etag");

  app.use(prefix, routes);

  app.get("/", (_req, res) => {
    return res.status(200).send({
      message: {
        en: "Project is successfully working...",
      },
    });
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Content-Security-Policy-Report-Only", "default-src: https:");
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT POST PATCH DELETE GET");
      return res.status(200).json({});
    }
    next();
  });

  app.use((_req, _res, next) => {
    const error = new Error("Endpoint could not find!");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, _next) => {
    res.status(error.status || 500);
    let resultCode = "00015";
    let level = "External Error";
    if (error.status === 500) {
      resultCode = "00013";
      level = "Server Error";
    } else if (error.status === 404) {
      resultCode = "00014";
      level = "Client Error";
    }
    logger(resultCode, req?.user?._id ?? "", error.message, level, req);
    return res.json({
      resultMessage: {
        en: error.message,
      },
      resultCode: resultCode,
    });
  });
};
