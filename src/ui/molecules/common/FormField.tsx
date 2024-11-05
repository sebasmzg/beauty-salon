"use client";

import { Input } from "@/ui/atoms";
import { Control, FieldError, Path, FieldValues, Controller} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    label: string;
    type: string;
    name:Path<T>;
    control: Control<T>;
    error?: FieldError;
    id?: string;
    placeholder?: string;
}

export const FormField =<T extends FieldValues>({
    label,
    type,
    name,
    control,
    error,
    id,
    placeholder,
}:FormFieldProps<T>) => {
    return (
    <div className="w-full flex flex-col mb-4">
        <label 
            htmlFor={id || label.toLocaleLowerCase()} 
            className={`text-sm font-medium `}>
            {label}
        </label>
        <Controller 
            name={name}
            control={control}
            render={({field})=>(
                <Input
                    id={id || label.toLocaleLowerCase()}
                    type={type}
                    placeholder={placeholder || `Ingrese su ${label.toLocaleLowerCase()}`}
                    error={error?.message}
                    {...field}
                />
            )}
        />
    </div>
    );
}