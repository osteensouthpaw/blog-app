"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { BiTrash } from "react-icons/bi";

const DeleteBlogButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
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
                  await axios.delete(`/api/blogs/${issueId}`);
                  router.push("/blogs");
                  router.refresh();
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
    </>
  );
};

export default DeleteBlogButton;
