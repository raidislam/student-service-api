"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentServices = void 0;
const student_model_1 = require("../student.model");
// CREATE STUDENT
const createStudentIntoDB = function (student) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield student_model_1.StudentModel.create(student);
        return result;
    });
};
// GETALL STUDENT
const getAllStudentFromDB = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield student_model_1.StudentModel.find();
        return result;
    });
};
// GET SINGLE STUDENT
const getSingleStudentFromDB = function (studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield student_model_1.StudentModel.findOne({ id: studentId });
        return result;
    });
};
exports.StudentServices = {
    createStudentIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
};
