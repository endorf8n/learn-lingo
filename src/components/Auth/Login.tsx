import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { validationSchema } from "../../utils/loginValidationSchema";

interface FormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const initialValues: FormValues = { email: "", password: "" };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div>
      <h2 className="text-xl2 text-black leading-[48px] tracking-tight font-medium mb-5 ">
        Log In
      </h2>
      <p className="text-base text-black/80 leading-[22px] mb-10">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className="flex flex-col gap-y-4">
          <div className="relative w-full">
            <Field
              className="py-4 pl-[18px] border border-black/10 w-full rounded-lg placeholder:text-black"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-0 absolute top-full left-4"
            />
          </div>
          <div className="relative w-full mb-10">
            <Field
              className="py-4 pl-[18px] border border-black/10 w-full rounded-lg placeholder:text-black"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <LuEyeOff size={22} /> : <LuEye size={22} />}
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mt-0 absolute top-full left-4"
            />
          </div>
          <button
            className="py-4 bg-darkYellow text-black text-center font-bold text-m leading-7 border-none w-full rounded-lg hover:scale-105 hover:shadow-3xl duration-300"
            type="submit"
          >
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};
