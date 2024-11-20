"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { BiTrash } from "react-icons/bi";

const DeleteBlogButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = React.useState<boolean>(false);

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" variant="soft">
            <BiTrash size={15} />
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
                onClick={async () => {
                  try {
                    await axios.delete(`/api/blogs/${issueId}`);
                    router.push("/blogs");
                    router.refresh();
                  } catch (error) {
                    setError(true);
                  }
                }}
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
