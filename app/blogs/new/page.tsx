"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewBlogPage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root placeholder="Title" />
      <SimpleMDE placeholder="Content here" />
      <Button radius="full">Publish</Button>
    </div>
  );
};

export default NewBlogPage;
