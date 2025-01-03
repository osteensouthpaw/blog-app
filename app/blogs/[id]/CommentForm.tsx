"use client";
import { createComment } from "@/actions/createComment";
import { updateComment } from "@/actions/updateComment";
import { commentSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Comment, User } from "@prisma/client";
import { Form, FormField } from "@radix-ui/react-form";
import { Button, Callout, Flex, TextArea } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { BiInfoCircle, BiSend } from "react-icons/bi";
import { z } from "zod";
import UserHandle from "../_components/UserHandle";

export type CommentFormData = z.infer<typeof commentSchema>;

interface Props {
  blogId: number;
  comment?: Comment;
  onCancelEdit?: () => void;
  onSubmitUpdate?: () => void;
}

const CommentForm = ({
  blogId,
  comment,
  onCancelEdit,
  onSubmitUpdate,
}: Props) => {
  const { data: session } = useSession();
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, reset } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data: CommentFormData) => {
    const result = comment
      ? updateComment(comment, data)
      : createComment(data, blogId);
    startTransition(() => {
      result.then((res) => {
        setError(res?.error);
      });
    });
    if (onSubmitUpdate) onSubmitUpdate();
    reset();
  };

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red">
          <Callout.Icon>
            <BiInfoCircle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      {session && session.user ? (
        <div>
          <UserHandle user={session.user as User} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap="4" className={`${comment && "flex-col md:flex-row"}`}>
              <FormField name="comment" className="space-y-2 flex-1">
                <TextArea
                  defaultValue={comment?.content}
                  {...register("content")}
                  size="2"
                  placeholder="Reply to comment…"
                />
              </FormField>
              <Flex align="center" gap="4">
                <Button
                  variant="ghost"
                  type="submit"
                  radius="full"
                  disabled={isPending}
                >
                  <BiSend size={25} />
                </Button>
                {onCancelEdit && (
                  <Button
                    variant="soft"
                    color="gray"
                    radius="full"
                    onClick={onCancelEdit}
                  >
                    Cancel
                  </Button>
                )}
              </Flex>
            </Flex>
          </Form>
        </div>
      ) : (
        <Link href="/auth/signin" className="border-b-2 border-zinc-700">
          Log In to Comment
        </Link>
      )}
    </div>
  );
};

export default CommentForm;
