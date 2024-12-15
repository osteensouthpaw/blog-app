"use client";
import { Comment, User } from "@prisma/client";
import { Box, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import UserHandle from "../_components/UserHandle";
import CommentActions from "./CommentActions";
import CommentForm from "./CommentForm";

interface Props {
  comment: Comment;
  user: User;
}

const CommentCard = ({ comment, user }: Props) => {
  const [editComment, setOnEditComment] = useState(false);

  const onEdit = () => setOnEditComment(true);

  const cancelEdit = () => setOnEditComment(false);

  const submitUpdate = () => setOnEditComment(false);

  return (
    <Box className="space-y-2 border-b pb-2">
      {editComment ? (
        <CommentForm
          blogId={comment.blogId}
          comment={comment}
          onCancelEdit={cancelEdit}
          onSubmitUpdate={submitUpdate}
        />
      ) : (
        <>
          <Flex justify="between" align="center">
            <UserHandle
              user={user}
              createdDate={comment.createdAt}
              editedDate={comment.updatedAt}
            />
            <CommentActions
              onEditComment={onEdit}
              user={user}
              commentId={comment.id}
            />
          </Flex>
          <Text className="text-zinc-700 block text-sm">{comment.content}</Text>
        </>
      )}
    </Box>
  );
};

export default CommentCard;
