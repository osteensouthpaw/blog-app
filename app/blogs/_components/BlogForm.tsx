"use client";
import { createBlogSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Blog } from "@prisma/client";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import ErrorMessage from "../../components/ErrorMessage";

type BlogFormData = z.infer<typeof createBlogSchema>;

const BlogForm = ({ blog }: { blog?: Blog }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>({
    resolver: zodResolver(createBlogSchema),
  });
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (blog) await axios.patch(`/api/blogs/${blog.id}`, data);
      else await axios.post("/api/blogs", data);
      router.push("/blogs");
      router.refresh();
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
        <TextField.Root
          defaultValue={blog?.title}
          placeholder="Title"
          {...register("title")}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          defaultValue={blog?.content}
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
          {isSubmitting && <Spinner />} {blog ? "Update" : "Publish"}
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;
