import prisma from "@/prisma/client";
import { Comment } from "@prisma/client";
import React from "react";
import CommentCard from "./CommentCard";

const CommentCardWrapper = async ({ comment }: { comment: Comment }) => {
  const user = await prisma.user.findUnique({
    where: { id: comment.userId },
  });
  if (!user) return null;

  return <CommentCard comment={comment} user={user} />;
};

export default CommentCardWrapper;
