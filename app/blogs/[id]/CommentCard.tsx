import { Comment } from "@prisma/client";
import { Box, Flex, Text, Button, DropdownMenu } from "@radix-ui/themes";
import UserHandle from "../_components/UserHandle";
import prisma from "@/prisma/client";
import { FaHamburger } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { BiPencil, BiTrash } from "react-icons/bi";

const CommentCard = async ({ comment }: { comment: Comment }) => {
  const user = await prisma.user.findUnique({
    where: { id: comment.userId },
  });
  if (!user) return null;

  return (
    <Box className="space-y-2 border-b pb-2">
      <Flex justify="between" align="center">
        <UserHandle user={user} date={comment.createdAt} />
        <CommentActions />
      </Flex>
      <Text className="text-zinc-700 block text-sm">{comment.content}</Text>
    </Box>
  );
};

const CommentActions = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="ghost" radius="full" className="p-2">
          <FaEllipsis size={20} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item>
          <Flex gap="4" align="baseline" justify="between">
            <BiPencil size={15} />
            <Text as="p" className="text-zinc-600">
              Edit
            </Text>
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Flex gap="4" align="baseline" justify="between">
            <BiTrash size={15} />
            <Text as="p" className="text-zinc-600">
              Delete
            </Text>
          </Flex>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default CommentCard;
