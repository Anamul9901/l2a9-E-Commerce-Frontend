import { Input } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";

 const FXInput = ({
  defaultValue,
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  isDisabled,
}: any) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Set the default value for the field when the component mounts
  React.useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <Input
      {...register(name)}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
      isDisabled={isDisabled}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
    />
  );
};

export default FXInput;