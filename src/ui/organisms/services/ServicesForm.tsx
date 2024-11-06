"use client";

import { ErrorResponse, FieldError } from "@/app/core/application/dto";
import { IServicesRequest } from "@/app/core/application/dto";
import { EndPointService } from "@/app/core/application/model";
import { ButtonSubmit, Form, FormTitle } from "@/ui/atoms";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const createServiceSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
});

export const ServicesForm = ({
  title,
  submit,
  method,
}: {
  title: string;
  submit: string;
  method?: string;
}) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IServicesRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(createServiceSchema),
  });

  const createService = async (data: IServicesRequest) => {
    console.log("trying to create", data);
    try {
      console.log("fetching");
      const response = await fetch(EndPointService.CREATE_SERVICE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error creating service");
      }
      const result = await response.json();
      console.log("service created - form", result);
    } catch (error) {
      console.log("Error in createService", error);
      handleError(error);
      return;
    }
  };

  const handleError = (error: unknown) => {
    const errorData = error as ErrorResponse;
    if (errorData && errorData.errors) {
      if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
        errorData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof IServicesRequest, {
            message: error,
          });
        });
      } else {
        if ("message" in errorData.errors[0]) {
          setError("name", { message: errorData.errors[0].message });
        }
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(createService)}>
      <FormTitle>{title}</FormTitle>
      <FormField<IServicesRequest>
        control={control}
        name="name"
        label="Name"
        type="text"
        error={errors.name}
      />
      <FormField<IServicesRequest>
        control={control}
        name="description"
        label="Description"
        type="text"
        error={errors.description}
      />
      <FormField<IServicesRequest>
        control={control}
        name="price"
        label="Price"
        type="number"
        error={errors.price}
      />
      <ButtonSubmit title={submit} />
    </Form>
  );
};
