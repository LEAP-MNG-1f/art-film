import express from "express";
import {
  getDreamersDays,
  createDreamersDay,
  getDreamersDayById,
  updateDreamersDay,
  deleteDreamersDay,
} from "../controllers/dreamersday.controller.js";

const dreamersDayRouter = express.Router();

dreamersDayRouter.route("/").get(getDreamersDays).post(createDreamersDay);
dreamersDayRouter
  .route("/:id")
  .get(getDreamersDayById)
  .put(updateDreamersDay)
  .delete(deleteDreamersDay);

export default dreamersDayRouter;
