"use client";

import {
  ErrorResponse,
  FieldError,
  IClient,
  IClientRequest,
  IService,
} from "@/app/core/application/dto";
import { EndPointClients, EndPointService } from "@/app/core/application/model";
import { ButtonSubmit, Form, FormTitle } from "@/ui/atoms";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const createServiceSchema = yup.object().shape({
  firstName: yup.string().required("Firsname is required"),
  lastName: yup.string().required("Lastname is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required").min(10, "Phone must be at least 10 characters"),
});

interface ServicesFormProps {
  title: string;
  submit: string;
  itemData?: IClient;
  method: string;
}

export const ClientsForm = ({
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
  } = useForm<IClientRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(createServiceSchema),
    defaultValues: {
      firstName: itemData?.firstName || "",
      lastName: itemData?.lastName || "",
      email: itemData?.email || "",
      phone: itemData?.phone || "",
    },
  });

  useEffect(() => {
    if (itemData) {
      setValue("firstName", itemData.firstName);
      setValue("lastName", itemData.lastName);
      setValue("email", itemData.email);
      setValue("phone", itemData.phone);
    }
  }, [itemData, setValue]);

  const createService = async (data: IClientRequest) => {
    try {
      console.log("fetching");
      const response = await fetch(EndPointClients.CREATE_CLIENT, {
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

  const updateService = async (data: IClient) => {
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
          setError(field as keyof IClientRequest, {
            message: error,
          });
        });
      } else {
        if ("message" in errorData.errors[0]) {
          setError("firstName", { message: errorData.errors[0].message });
        }
      }
    }
  };

  const onSubmit = (data: IClientRequest | IService) => {
    if (method === "PUT" && itemData) {
      updateService({ ...data, id: itemData.id } as IClient);
    } else {
      createService(data as IClientRequest);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>{title}</FormTitle>
      <FormField<IClientRequest>
        control={control}
        name="firstName"
        label="Firstname"
        type="text"
        error={errors.firstName}
      />
      <FormField<IClientRequest>
        control={control}
        name="lastName"
        label="Lastname"
        type="text"
        error={errors.lastName}
      />
      <FormField<IClientRequest>
        control={control}
        name="email"
        label="Email"
        type="email"
        error={errors.email}
      />
      <FormField<IClientRequest>
        control={control}
        name="phone"
        label="Phone"
        type="number"
        error={errors.phone}
      />
      <ButtonSubmit title={submit} />
    </Form>
  );
};
