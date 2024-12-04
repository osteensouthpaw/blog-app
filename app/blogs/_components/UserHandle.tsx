import { User } from "@prisma/client";
import { Avatar, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { RxAvatar } from "react-icons/rx";

interface Props {
  user: User;
  date?: Date;
}

const UserHandle = ({ user, date: date }: Props) => {
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
          <Text className="text-xs text-zinc-500">{date.toDateString()}</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default UserHandle;
