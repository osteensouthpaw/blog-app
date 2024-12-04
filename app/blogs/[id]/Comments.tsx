import { Box, Text } from "@radix-ui/themes";
import CommentForm from "./CommentForm";
import { Blog } from "@prisma/client";
import prisma from "@/prisma/client";
import CommentCard from "./CommentCard";

const Comments = async ({ blog }: { blog: Blog }) => {
  const comments = await prisma.comment.findMany({
    where: { blogId: blog.id },
  });

  return (
    <Box className="mt-8 space-y-3">
      <Text className="font-semibold text-xl">Comments</Text>
      <CommentForm blogId={blog.id} />
      <Box className="space-y-5">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </Box>
    </Box>
  );
};

export default Comments;
