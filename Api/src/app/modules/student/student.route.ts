import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

// will call controller func
router.post("/create-student", StudentController.createStudent_C);
router.get("/", StudentController.getAllStudent_C);
router.get("/:id", StudentController.getSingleStudent_C);

export const StudentRoutes = router;
