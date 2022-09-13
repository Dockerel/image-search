import express from "express";
import { getSearch, postSearch } from "../controllers/imageController";

const rootRouter = express.Router();

rootRouter.route("/").get(getSearch).post(postSearch);

export default rootRouter;
