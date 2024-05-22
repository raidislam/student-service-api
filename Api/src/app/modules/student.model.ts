import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGurdian,
  Student,
  UserName,
} from "./student/student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    maxlength: [20, "Name Maximum allowed length is 20"],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameCapital = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameCapital !== value;
      },
      message: "{VALUE} is not in capitalize formate",
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: [true, "last name is required"] },
});

const gurdianSchema = new Schema<Guardian>({
  fataherName: { type: String, required: [true, "Father is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father occupation is required"],
  },
  fatherContact: {
    type: String,
    required: [true, "Father number is required"],
  },
  motherName: { type: String, required: [true, "Mother is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother number is required"],
  },
});

const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: { type: userNameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message:
        "The gender field can only be one of the following: 'male' 'female' .",
    },
    required: true,
  },
  email: { type: String, requierd: true, unique: true },
  dateOfBirth: { type: String },
  contactNo: { type: String, requierd: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  guirdian: { type: gurdianSchema, required: true },
  localGurdian: { type: localGurdianSchema, required: true },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
