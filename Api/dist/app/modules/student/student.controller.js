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
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
//
const createStudent_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { student: studentData } = req.body;
            const result = yield student_service_1.StudentServices.createStudentIntoDB(studentData);
            // send response
            res.status(200).json({
                success: true,
                message: "student is created successfully",
                data: result,
            });
        }
        catch (err) {
            console.log(err);
        }
    });
};
// GET ALL STUDENT
const getAllStudent_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield student_service_1.StudentServices.getAllStudentFromDB();
            res.status(200).json({
                success: true,
                message: "student all data found successfully",
                data: result,
            });
        }
        catch (err) {
            console.log(err);
        }
    });
};
// GET SINGLE STUDENT
const getSingleStudent_C = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            const result = yield (student_service_1.StudentServices === null || student_service_1.StudentServices === void 0 ? void 0 : student_service_1.StudentServices.getSingleStudentFromDB(id));
            res.status(200).json({
                success: true,
                message: "single student item found successfully",
                data: result,
            });
        }
        catch (err) {
            console.log(err);
        }
    });
};
exports.StudentController = {
    createStudent_C,
    getAllStudent_C,
    getSingleStudent_C,
};
