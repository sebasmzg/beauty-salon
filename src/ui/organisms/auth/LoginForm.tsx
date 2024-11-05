"use client";

import {
  ErrorResponse,
  FieldError,
  ILoginRequest,
} from "@/app/core/application/dto";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "@/ui/molecules";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const loginSchema = yup.object().shape({
  userName: yup
    .string()
    .email("Invalid username")
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const LoginForm = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data: ILoginRequest) => {
    try {
      const result = await signIn("credentials", {
        username: data.userName,
        password: data.password,
        redirect: false,
      });
      if (result?.error) {
        console.log("Error in login", JSON.parse(result.error));
        handleError(JSON.parse(result.error));
        return;
      }
      router.push("/dashboard/services");
    } catch (error) {
      console.log("Error in login", error);
    }
  };

  const handleError = (error: unknown) => {
    const errorData = error as ErrorResponse;
    if (errorData && errorData.errors) {
      if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
        errorData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof ILoginRequest, { message: error });
        });
      } else {
        if ("message" in errorData.errors[0]) {
          setError("userName", { message: errorData.errors[0].message });
        }
      }
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto p-4 space-y-4"
      onSubmit={handleSubmit(handleLogin)}
    >
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <FormField<ILoginRequest>
        control={control}
        name="userName"
        label="Username"
        type="email"
        error={errors.userName}
        placeholder="Enter your username"
      />
      <FormField<ILoginRequest>
        control={control}
        name="password"
        label="Password"
        type="password"
        error={errors.password}
        placeholder="Enter your password"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-400"
      >
        Login
      </button>
    </form>
  );
};
