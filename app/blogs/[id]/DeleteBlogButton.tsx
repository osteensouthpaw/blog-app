import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import React from "react";
import { BiTrash } from "react-icons/bi";

const DeleteBlogButton = ({ issueId }: { issueId: number }) => {
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
          <Flex gap="3" mt='5'>
            <AlertDialog.Action>
              <Button color="red">Delete</Button>
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
