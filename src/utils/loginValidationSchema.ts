import * as Yup from "yup";
import { emailValidator, passwordValidator } from "./regexPatterns";

export const validationSchema = Yup.object({
  email: Yup.string()
    .matches(emailValidator)
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      passwordValidator,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be 6-16 characters long"
    )
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
