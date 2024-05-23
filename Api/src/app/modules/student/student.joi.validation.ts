import Joi from "joi";

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .max(20)
    .trim()
    .required()
    .regex(/^[A-Z][a-z]*$/, "capitalize formate")
    .messages({
      "string.base": "First name should be a type of text",
      "string.empty": "First name is required",
      "string.max": "Name Maximum allowed length is 20",
      "string.pattern.name": "{#label} is not in capitalize formate",
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string().required().messages({
    "string.base": "Last name should be a type of text",
    "string.empty": "Last name is required",
  }),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "string.base": "Father name should be a type of text",
    "string.empty": "Father name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    "string.base": "Father occupation should be a type of text",
    "string.empty": "Father occupation is required",
  }),
  fatherContact: Joi.string().required().messages({
    "string.base": "Father contact should be a type of text",
    "string.empty": "Father contact is required",
  }),
  motherName: Joi.string().required().messages({
    "string.base": "Mother name should be a type of text",
    "string.empty": "Mother name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    "string.base": "Mother occupation should be a type of text",
    "string.empty": "Mother occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    "string.base": "Mother contact number should be a type of text",
    "string.empty": "Mother contact number is required",
  }),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Local guardian name should be a type of text",
    "string.empty": "Local guardian name is required",
  }),
  occupation: Joi.string().required().messages({
    "string.base": "Local guardian occupation should be a type of text",
    "string.empty": "Local guardian occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    "string.base": "Local guardian contact number should be a type of text",
    "string.empty": "Local guardian contact number is required",
  }),
  address: Joi.string().required().messages({
    "string.base": "Local guardian address should be a type of text",
    "string.empty": "Local guardian address is required",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.base": "ID should be a type of text",
    "string.empty": "ID is required",
  }),
  name: userNameSchema.required(),
  gender: Joi.string().valid("male", "female").required().messages({
    "any.only":
      "The gender field can only be one of the following: 'male', 'female'.",
    "string.empty": "Gender is required",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email should be a type of text",
    "string.email": "Email must be a valid email",
    "string.empty": "Email is required",
  }),
  dateOfBirth: Joi.string().optional(),
  contactNo: Joi.string().required().messages({
    "string.base": "Contact number should be a type of text",
    "string.empty": "Contact number is required",
  }),
  emergencyContactNo: Joi.string().required().messages({
    "string.base": "Emergency contact number should be a type of text",
    "string.empty": "Emergency contact number is required",
  }),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .optional()
    .messages({
      "any.only":
        "Blood group must be one of A+, A-, B+, B-, AB+, AB-, O+, O-.",
    }),
  presentAddress: Joi.string().required().messages({
    "string.base": "Present address should be a type of text",
    "string.empty": "Present address is required",
  }),
  permanentAddress: Joi.string().required().messages({
    "string.base": "Permanent address should be a type of text",
    "string.empty": "Permanent address is required",
  }),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImage: Joi.string().optional(),
  isActive: Joi.string().valid("active", "blocked").default("active").messages({
    "any.only": "Status must be either 'active' or 'blocked'.",
  }),
});

export default studentValidationSchema;
