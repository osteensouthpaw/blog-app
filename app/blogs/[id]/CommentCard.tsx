import { Comment } from "@prisma/client";
import { Box, Text } from "@radix-ui/themes";
import UserHandle from "../_components/UserHandle";
import prisma from "@/prisma/client";

const CommentCard = async ({ comment }: { comment: Comment }) => {
  const user = await prisma.user.findUnique({
    where: { id: comment.userId },
  });
  if (!user) return null;

  return (
    <Box className="space-y-2 border-b pb-2">
      <UserHandle user={user} date={comment.createdAt} />
      <Text className="text-zinc-700 block text-sm">{comment.content}</Text>
    </Box>
  );
};

export default CommentCard;
