"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface BlogForm {
  title: string;
  content: string;
}

const NewBlogPage = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<BlogForm>();

  return (
    <form
      className="max-w-xl space-y-5"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/blogs", data);
        router.push("/blogs");
      })}
    >
      <TextField.Root placeholder="Title" {...register("title")} />
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Content here" {...field} />
        )}
      />
      <Button radius="full">Publish</Button>
    </form>
  );
};

export default NewBlogPage;
