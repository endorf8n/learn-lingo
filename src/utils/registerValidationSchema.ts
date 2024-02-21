import * as Yup from "yup";
import {
  nameValidator,
  emailValidator,
  passwordValidator,
} from "./regexPatterns";

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      nameValidator,
      "Name may contain only alphabetic characters and whitespace"
    )
    .required("Name is required"),
  email: Yup.string()
    .matches(
      emailValidator,
      "Invalid email address, email must be in format 'youremail@example.com'"
    )
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      passwordValidator,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be 8-16 characters long"
    )
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
