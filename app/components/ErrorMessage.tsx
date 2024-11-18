import React, { PropsWithChildren } from "react";
import { Text } from "@radix-ui/themes";
import { FieldError } from "react-hook-form";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <Text color="red" className="block">
      {children}
    </Text>
  );
};

export default ErrorMessage;
