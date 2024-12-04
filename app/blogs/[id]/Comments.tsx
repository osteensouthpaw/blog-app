import { Box, Button, Flex, Text, TextArea } from "@radix-ui/themes";
import { Form, FormField, FormLabel } from "@radix-ui/react-form";
import { BiSend } from "react-icons/bi";
import UserHandle from "../_components/UserHandle";
import { User } from "next-auth";

const Comments = () => {
  return (
    <Box className="mt-8 max-w-xl space-y-3">
      <Text className="font-semibold text-xl">Comments</Text>
      <UserHandle user={{ name: "osteen" } as User} />
      <Form>
        <Flex gap="4">
          <FormField name="comment" className="space-y-2 flex-1">
            <TextArea size="2" placeholder="Reply to comment…" />
          </FormField>
          <button type="submit">
            <BiSend size={25} />
          </button>
        </Flex>
      </Form>
    </Box>
  );
};

export default Comments;
