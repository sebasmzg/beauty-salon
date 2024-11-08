"use client";

import {
  ErrorResponse,
  FieldError,
  IService,
} from "@/app/core/application/dto";
import { IServicesRequest } from "@/app/core/application/dto";
import { EndPointService } from "@/app/core/application/model";
import { ButtonSubmit, Form, FormTitle } from "@/ui/atoms";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const createServiceSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
});

interface ServicesFormProps {
  title: string;
  submit: string;
  itemData?: IService;
  method: string;
}

const initialServiceData = {
  name: "",
  description: "",
  price: 0,
};

export const ServicesForm = ({
  title,
  submit,
  itemData,
  method = "POST",
}: ServicesFormProps) => {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<IServicesRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(createServiceSchema),
    defaultValues: {
      name: itemData?.name || "",
      description: itemData?.description || "",
      price: itemData?.price || 0,
    },
  });

  useEffect(() => {
    if (itemData) {
      setValue("name", itemData.name);
      setValue("description", itemData.description);
      setValue("price", itemData.price);
    }
  }, [itemData, setValue]);

  const createService = async (data: IServicesRequest) => {
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
      console.log("Error in create service", error);
      handleError(error);
      return;
    }
  };

  const updateService = async (data: IService) => {
    console.log("trying to edit service", data);
    try {
      console.log("editing service");
      const response = await fetch(EndPointService.UPDATE_SERVICE, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error creating service");
      }
      const result = await response.json();
      console.log("service edited - form", result);
    } catch (error) {
      console.log("Error in edit service", error);
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

  const onSubmit = (data: IServicesRequest | IService) => {
    if (method === "PUT" && itemData) {
      updateService({ ...(data), id: itemData.id } as IService);
    } else {
      createService(data as IServicesRequest);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
