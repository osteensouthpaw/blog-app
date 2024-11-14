import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewBlogPage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root placeholder="Title" />
      <TextArea placeholder="Content" />
      <Button>Submit</Button>
    </div>
  );
};

export default NewBlogPage;
