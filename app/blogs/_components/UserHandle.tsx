import { User } from "@prisma/client";
import { Avatar, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { RxAvatar } from "react-icons/rx";

interface Props {
  user: User;
  showDate?: boolean;
}

const UserHandle = ({ user, showDate: date }: Props) => {
  return (
    <Flex gap="3" p="2" align="center">
      <Avatar
        size="3"
        radius="full"
        src={user.image!}
        fallback={<RxAvatar />}
      />
      <Flex direction="column">
        <Text className="font-semibold text-sm">{user.name}</Text>
        {date && (
          <Text className="text-sm text-zinc-500">
            {user.createdAt.toString()}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default UserHandle;
