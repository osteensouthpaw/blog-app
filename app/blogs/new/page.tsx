"use client";
import { createBlogSchema } from "@/app/validationSchemas";
import { Button, Callout, Spinner, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../../components/ErrorMessage";

type BlogForm = z.infer<typeof createBlogSchema>;

const NewBlogPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BlogForm>({
    resolver: zodResolver(createBlogSchema),
  });
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/blogs", data);
      router.push("/blogs");
    } catch (error) {
      console.log(error);
      setError("an error occured please try again");
    }
  });

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root mb="5" color="red">
          {error}
        </Callout.Root>
      )}
      <form className=" space-y-5" onSubmit={onSubmit}>
        <TextField.Root placeholder="Title" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Content here" {...field} />
          )}
        />
        <ErrorMessage>{errors.content?.message}</ErrorMessage>
        <Button
          disabled={isSubmitting}
          type="submit"
          radius="full"
          className="hover:cursor-pointer"
        >
          {isSubmitting && <Spinner />}
          Publish
        </Button>
      </form>
    </div>
  );
};

export default NewBlogPage;
