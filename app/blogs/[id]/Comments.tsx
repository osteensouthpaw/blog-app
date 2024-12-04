import { Box, Text } from "@radix-ui/themes";
import CommentBox from "./CommentBox";

const Comments = ({ blogId }: { blogId: number }) => {
  return (
    <Box className="mt-8 max-w-xl space-y-3">
      <Text className="font-semibold text-xl">Comments</Text>
      <CommentBox blogId={blogId} />
    </Box>
  );
};

export default Comments;
