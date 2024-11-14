"use client";

import Image from "next/image";
import loginImg from "../../../public/assets/images/loginImg.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/utils/context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login } = useAuth();

  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values: any) => {
    login(values?.email);
    router.push("/");
  };

  return (
    <>
      <div className="mainContainer flex justify-between items-center my-4 pt-32">
        <div className="max-w-lg">
          <Image src={loginImg} alt="login-banner-img" />
        </div>
        <div className="max-w-lg w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-10">
                <h2 className="text-4xl mb-10">Login</h2>
                <div className="flex flex-col gap-10">
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="p-4 border border-solid border-[#ddd] rounded-md w-full max-w-96"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="p-4 border border-solid border-[#ddd] rounded-md w-full max-w-96"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#DB4444] text-white rounded-md max-w-40 py-4"
                  >
                    LogIn
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
