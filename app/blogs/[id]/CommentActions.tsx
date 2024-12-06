"use client";
import { deleteComment } from "@/actions/deleteComment";
import { DropdownMenu, Button, Flex } from "@radix-ui/themes";
import { useState, useTransition } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";

interface Props {
  commentId: number;
  onEditComment: () => void;
}

const CommentActions = ({ commentId, onEditComment }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();

  const onDeleteComment = () => {
    startTransition(() => {
      deleteComment(commentId).then((data) => {
        setError(data?.error);
      });
    });
  };

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
            <button className="text-zinc-600" onClick={onEditComment}>
              Edit
            </button>
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Flex gap="4" align="baseline" justify="between">
            <BiTrash size={15} />
            <button
              disabled={isPending}
              onClick={onDeleteComment}
              className="text-zinc-600"
            >
              Delete
            </button>
          </Flex>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default CommentActions;
