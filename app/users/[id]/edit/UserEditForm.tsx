"use client";
import { updateUser } from "@/actions/updateUser";
import { userUpdateSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { Form, FormField, FormLabel, FormMessage } from "@radix-ui/react-form";
import {
  Button,
  Callout,
  Spinner,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { BiInfoCircle } from "react-icons/bi";
import { z } from "zod";

export type UserUpdateFormData = z.infer<typeof userUpdateSchema>;

const UserEditForm = ({ user }: { user: User }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateFormData>({
    resolver: zodResolver(userUpdateSchema),
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [error, setError] = useState("");
  const onSubmit = handleSubmit((data: UserUpdateFormData) => {
    startTransition(() => {
      updateUser(data, user.id)
        .then((data) => {
          router.push(`/users/${user.id}`);
          router.refresh();
        })
        .catch((data) => {
          console.log(data);
          setError(data.error);
        });
    });
  });

  return (
    <>
      {error && (
        <Callout.Root>
          <Callout.Icon>
            <BiInfoCircle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <Form className="space-y-9" onSubmit={onSubmit}>
        <FormField name="user-name" className="space-y-2">
          <FormLabel>Name</FormLabel>
          <TextField.Root
            defaultValue={user.name!}
            {...register("name")}
            required
          />
          {errors.name && <FormMessage>Name is required</FormMessage>}
        </FormField>
        <FormField name="bio" className="space-y-2">
          <FormLabel>Bio</FormLabel>
          <TextArea
            size="3"
            defaultValue={user.bio || ""}
            className="h-20"
            {...register("bio")}
          />
        </FormField>
        <Button type="submit" disabled={isPending}>
          {isPending && <Spinner />}
          Update
        </Button>
      </Form>
    </>
  );
};

export default UserEditForm;
