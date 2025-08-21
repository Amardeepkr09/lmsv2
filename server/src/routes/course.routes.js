import express from "express";
import moduleRoutes from "./module.routes.js";
import {
  getAllCourses,
  getCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
const router = express.Router();

router.route("/")
  .get(getCourses)
  .post(createCourse);
router.route("/:courseid")
  .get(getCourse)
  .patch(updateCourse)
  .delete(deleteCourse);
router.use("/:courseid/modules", moduleRoutes);
export default router;
