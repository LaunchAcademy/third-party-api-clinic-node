import express from "express";

import clientRouter from "./clientRouter.js";
import gifsRouter from "./api/v1/gifsRouter.js"

const rootRouter = new express.Router();

rootRouter.use("/api/v1/gifs", gifsRouter);


rootRouter.use("/", clientRouter);

export default rootRouter;
