"use client";
import { createComment } from "@/actions/createComment";
import { commentSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { Form, FormField } from "@radix-ui/react-form";
import { Callout, Flex, TextArea, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { BiInfoCircle, BiSend } from "react-icons/bi";
import { z } from "zod";
import UserHandle from "../_components/UserHandle";
import Link from "next/link";

export type CommentFormData = z.infer<typeof commentSchema>;

const CommentForm = ({ blogId }: { blogId: number }) => {
  const { data: session } = useSession();
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, reset } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data: CommentFormData) => {
    startTransition(() => {
      createComment(data, blogId).then((data) => {
        setError(data?.error);
      });
    });
    reset();
  };

  return (
    <div>
      {error && (
        <Callout.Root>
          <Callout.Icon>
            <BiInfoCircle />
          </Callout.Icon>
          <Callout.Text color="red">{error}</Callout.Text>
        </Callout.Root>
      )}
      {session && session.user ? (
        <div>
          <UserHandle user={session.user as User} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Flex gap="4">
              <FormField name="comment" className="space-y-2 flex-1">
                <TextArea
                  {...register("content")}
                  size="2"
                  placeholder="Reply to comment…"
                />
              </FormField>
              <button type="submit" disabled={isPending}>
                <BiSend size={25} />
              </button>
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
