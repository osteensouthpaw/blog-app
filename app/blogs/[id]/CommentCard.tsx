import prisma from "@/prisma/client";
import { Comment } from "@prisma/client";
import { Box, Flex, Text } from "@radix-ui/themes";
import UserHandle from "../_components/UserHandle";
import CommentActions from "./CommentActions";

const CommentCard = async ({ comment }: { comment: Comment }) => {
  const user = await prisma.user.findUnique({
    where: { id: comment.userId },
  });
  if (!user) return null;

  return (
    <Box className="space-y-2 border-b pb-2">
      <Flex justify="between" align="center">
        <UserHandle user={user} date={comment.createdAt} />
        <CommentActions commentId={comment.id} />
      </Flex>
      <Text className="text-zinc-700 block text-sm">{comment.content}</Text>
    </Box>
  );
};

export default CommentCard;
