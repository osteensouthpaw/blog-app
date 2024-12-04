import { Box, Text } from "@radix-ui/themes";
import CommentForm from "./CommentForm";
import { Blog } from "@prisma/client";
import CommentCard from "./CommentCard";

const Comments = async ({ blog }: { blog: Blog }) => {
  return (
    <Box className="mt-8 max-w-xl space-y-3">
      <Text className="font-semibold text-xl">Comments</Text>
      <CommentForm blogId={blog.id} />
      <div className="space-y-5">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </Box>
  );
};

export default Comments;
