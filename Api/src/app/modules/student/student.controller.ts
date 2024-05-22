import { Request, Response } from "express";
import { StudentServices } from "./student.service";
//
const createStudent_C = async function (req: Request, res: Response) {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);
    // send response
    res.status(200).json({
      success: true,
      message: "student is created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

// GET ALL STUDENT

const getAllStudent_C = async function (req: Request, res: Response) {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "student all data found successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// GET SINGLE STUDENT
const getSingleStudent_C = async function (req: Request, res: Response) {
  try {
    const id = req?.params?.id;
    const result = await StudentServices?.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "single student item found successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: err,
    });
  }
};

export const StudentController = {
  createStudent_C,
  getAllStudent_C,
  getSingleStudent_C,
};
