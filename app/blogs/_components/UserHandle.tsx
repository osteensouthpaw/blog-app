import { User } from "@prisma/client";
import { Avatar, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { RxAvatar } from "react-icons/rx";

interface Props {
  user: User;
  createdDate?: Date;
  editedDate?: Date;
}

const UserHandle = ({ user, createdDate, editedDate }: Props) => {
  return (
    <Link href={`/users/profile/${user.id}`}>
      <Flex gap="3" p="2" align="center">
        <Avatar
          size="3"
          radius="full"
          src={user.image!}
          fallback={<RxAvatar />}
        />
        <Flex direction="column">
          <Text className="font-semibold text-sm">{user.name}</Text>
          {createdDate && (
            <Text className="text-xs text-zinc-500">
              {createdDate.toString() !== editedDate?.toString()
                ? `${editedDate?.toDateString()} (edited)`
                : `${createdDate.toDateString()}`}
            </Text>
          )}
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserHandle;
