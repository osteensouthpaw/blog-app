import { Avatar, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const UserHandle = () => {
  return (
    <Flex gap="2" p="2" align='center'>
      <Avatar radius="full" src="" fallback={<RxAvatar />} />
      <Text className="font-semibold text-sm">First Name</Text>
    </Flex>
  );
};

export default UserHandle;
