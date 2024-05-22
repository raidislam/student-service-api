import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

// CREATE STUDENT
const createStudentIntoDB = async function (student: Student) {
  const result = await StudentModel.create(student);
  return result;
};

// GETALL STUDENT
const getAllStudentFromDB = async function () {
  const result = await StudentModel.find();
  return result;
};

// GET SINGLE STUDENT

const getSingleStudentFromDB = async function (studentId: string) {
  const result = await StudentModel.findOne({ id: studentId });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
