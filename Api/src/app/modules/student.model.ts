import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGurdian,
  Student,
  UserName,
} from "./student/student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const gurdianSchema = new Schema<Guardian>({
  fataherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ["male", "female"],
  email: { type: String, requierd: true },
  dateOfBirth: { type: String },
  contactNo: { type: String, requierd: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  guirdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImage: { type: String },
  isActive: ["active", "blocked"],
});

export const StudentModel = model<Student>("Student", studentSchema);
