import React from "react";
import UserHandle from "../_components/UserHandle";
import { Box, Text } from "@radix-ui/themes";
import { User } from "@prisma/client";

const CommentCard = () => {
  return (
    <Box className="space-y-2">
      <UserHandle user={{ name: "osteen", createdAt: new Date() } as User} showDate />
      <Text className="text-zinc-700 block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime et
        ipsum incidunt laborum quod praesentium temporibus magnam explicabo
        corporis odit impedit minus vel optio harum, culpa expedita provident
        assumenda hic?
      </Text>
    </Box>
  );
};

export default CommentCard;
