"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const userNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
});
const gurdianSchema = new mongoose_1.Schema({
    fataherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContact: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
});
const localGurdianSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});
const studentSchema = new mongoose_1.Schema({
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
exports.StudentModel = (0, mongoose_1.model)("Student", studentSchema);
