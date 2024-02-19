import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchema } from "../../utils/registerValidationSchema";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export const Register = () => {
  const initialValues: FormValues = { name: "", email: "", password: "" };
  return (
    <div>
      <h2 className="text-xl2 text-black leading-[48px] tracking-tight font-medium mb-5 ">
        Registration
      </h2>
      <p className="text-base text-black/80 leading-[22px] mb-10">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
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
          <Field
            className="relative border border-black"
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-xs mt-0 absolute top-full left-4"
          />
          <Field
            className="border border-black"
            type="email"
            name="email"
            placeholder="Email"
          />
          <Field
            className="border border-black"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
