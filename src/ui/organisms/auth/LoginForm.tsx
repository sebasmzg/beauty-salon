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
import { FormTitle } from "@/ui/atoms/form-title";
import { ButtonSubmit } from "@/ui/atoms/Button-submit";
import { Form } from "@/ui/atoms";

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
    <Form
      onSubmit={handleSubmit(handleLogin)}
    >
      <FormTitle>Login</FormTitle>
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
      <ButtonSubmit title="Login" />
    </Form>
  );
};
