import React from "react";
import { Button, Flex } from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <Flex align="center" gap="2">
      <Button
        variant="outline"
        onClick={() => {}}
        className="flex-1 cursor-pointer"
      >
        <FcGoogle size={20} />
      </Button>
      <Button
        variant="outline"
        onClick={() => {}}
        className="flex-1 cursor-pointer"
      >
        <FaGithub size={20} />
      </Button>
    </Flex>
  );
};

export default Social;
