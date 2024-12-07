"use client";
import { deleteComment } from "@/actions/deleteComment";
import { User } from "@prisma/client";
import { DropdownMenu, Button, Flex } from "@radix-ui/themes";
import { stat } from "fs";
import { useSession } from "next-auth/react";
import { useState, useTransition } from "react";
import { BiComment, BiPencil, BiTrash } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";

interface Props {
  commentId: number;
  onEditComment: () => void;
  user: User;
}

const CommentActions = ({ commentId, onEditComment, user }: Props) => {
  const { status, data: session } = useSession();
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
    <>
      {status === "authenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost" radius="full" className="p-2">
              <FaEllipsis size={20} />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            {session.user?.id === user.id ? (
              <>
                <DropdownMenu.Item>
                  <Flex gap="4" align="center" justify="between">
                    <BiPencil size={18} />
                    <button className="text-zinc-600" onClick={onEditComment}>
                      Edit
                    </button>
                  </Flex>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Flex gap="4" align="center" justify="between">
                    <BiTrash size={18} />
                    <button
                      disabled={isPending}
                      onClick={onDeleteComment}
                      className="text-zinc-600"
                    >
                      Delete
                    </button>
                  </Flex>
                </DropdownMenu.Item>
              </>
            ) : (
              <DropdownMenu.Item>
                <Flex gap="4" align="center" justify="between">
                  <BiComment size={18} />
                  <button className="text-zinc-600">Report</button>
                </Flex>
              </DropdownMenu.Item>
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </>
  );
};

export default CommentActions;
