"use client";
import {AlertDialog, Button, Flex, Spinner} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { BiTrash } from "react-icons/bi";

const DeleteBlogButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = React.useState<boolean>(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const deleteBlog = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/blogs/${issueId}`);
      router.push("/blogs");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setError(true);
    } finally {setIsDeleting(false);}
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button disabled={isDeleting} color="red" variant="soft">
            {isDeleting ? <Spinner /> : <BiTrash size={15}/>}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be reversed, are you sure you want to proceed?
          </AlertDialog.Description>
          <Flex gap="3" mt="5">
            <AlertDialog.Action>
              <Button
                color="red"
                onClick={deleteBlog}
              >
                Delete
              </Button>
            </AlertDialog.Action>
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>An Error occurred. Cannot delete blog</AlertDialog.Description>
          <AlertDialog.Cancel>
            <Button variant='soft' color='gray' mt='2' onClick={() => setError(false)}>OK</Button>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteBlogButton;
