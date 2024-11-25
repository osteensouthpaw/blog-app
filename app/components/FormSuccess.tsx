import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import { BsCheckCircle, BsExclamationTriangle } from "react-icons/bs";

const FormSuccess = ({ message }: { message?: string }) => {
  return (
    message && (
      <Flex
        gap="4"
        className="items-center bg-emerald-500/15 text-emerald-500 rounded-md py-1 px-3"
      >
        <BsCheckCircle />
        <Text>{message}</Text>
      </Flex>
    )
  );
};

export default FormSuccess;
