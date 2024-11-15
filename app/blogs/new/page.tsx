"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

interface BlogForm {
  title: string;
  content: string;
}

const NewBlogPage = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<BlogForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root mb="5" color="red">
          {error}
        </Callout.Root>
      )}
      <form
        className=" space-y-5"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/blogs", data);
            router.push("/blogs");
          } catch (error) {
            console.log(error);
            setError("an error occured please try again");
          }
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
    </div>
  );
};

export default NewBlogPage;
