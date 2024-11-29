import { User } from "@prisma/client";
import { Avatar, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const UserHandle = ({ user }: { user: User }) => {
  return (
    <Flex gap="2" p="2" align="center">
      <Avatar size='2' radius="full" src={user.image!} fallback={<RxAvatar />} />
      <Text className="font-semibold text-sm">{user.name}</Text>
    </Flex>
  );
};

export default UserHandle;
