import UserHandle from "@/app/blogs/_components/UserHandle";
import prisma from "@/prisma/client";
import React from "react";

interface Props {
  id: string;
}

const Followers = async ({ id }: Props) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) return null;
  return <UserHandle user={user} />;
};

export default Followers;
