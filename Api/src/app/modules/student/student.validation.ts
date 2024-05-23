import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, "Name Maximum allowed length is 20")
    .trim()
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      { message: "First name is not in capitalize format" }
    ),
  middleName: z.string().optional(),
  lastName: z.string({ required_error: "Last name is required" }),
});

// Define the Zod schema for Guardian
const guardianValidationSchema = z.object({
  fataherName: z.string({ required_error: "Father is required" }),
  fatherOccupation: z.string({
    required_error: "Father occupation is required",
  }),
  fatherContact: z.string({ required_error: "Father number is required" }),
  motherName: z.string({ required_error: "Mother is required" }),
  motherOccupation: z.string({
    required_error: "Mother occupation is required",
  }),
  motherContactNo: z.string({ required_error: "Mother number is required" }),
});

// Define the Zod schema for LocalGurdian
const localGuardianValidationSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  occupation: z.string({ required_error: "Occupation is required" }),
  contactNo: z.string({ required_error: "Contact number is required" }),
  address: z.string({ required_error: "Address is required" }),
});

// Define the Zod schema for Student
const studentValidationSchema = z.object({
  id: z.string({ required_error: "ID is required" }),
  name: userNameValidationSchema,
  gender: z.enum(["male", "female"], {
    errorMap: () => ({
      message:
        "The gender field can only be one of the following: 'male' 'female'.",
    }),
  }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
  dateOfBirth: z.string().optional(),
  contactNo: z.string({ required_error: "Contact number is required" }),
  emergencyContactNo: z.string({
    required_error: "Emergency contact number is required",
  }),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string({ required_error: "Present address is required" }),
  parmanentAddress: z.string({
    required_error: "Permanent address is required",
  }),
  guirdian: guardianValidationSchema,
  localGurdian: localGuardianValidationSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(["active", "blocked"]).default("active"),
});

export default studentValidationSchema;
