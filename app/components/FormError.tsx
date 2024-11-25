import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";

const FormError = ({ message }: { message?: string }) => {
  return (
    message && (
      <Flex
        gap="4"
        className="items-center bg-red-100 text-red-700 rounded-md py-1 px-3"
      >
        <BsExclamationTriangle />
        <Text>{message}</Text>
      </Flex>
    )
  );
};

export default FormError;
