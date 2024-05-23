import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validation";
import { z } from "zod";
//
const createStudent_C = async function (req: Request, res: Response) {
  try {
    const { student: studentData } = req.body;

    // ZOD Validation
    const zodData = studentValidationSchema.parse(studentData);
    // JOI VALIDATION
    // const { error, value } = studentValidationSchema.validate(studentData);
    const result = await StudentServices.createStudentIntoDB(studentData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: "something went wrong",
    //     error: error,
    //   });
    // }

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
