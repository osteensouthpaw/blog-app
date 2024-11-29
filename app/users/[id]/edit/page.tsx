import { Form, FormField, FormLabel } from "@radix-ui/react-form";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { FaPencil } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";

const ProfileEditPage = () => {
  return (
    <Box className="max-w-xl mx-auto space-y-11">
      <Flex>
        <Heading className="flex-1">Edit Profile</Heading>
        <Button>Save</Button>
      </Flex>
      <Box className="relative max-w-max">
        <Avatar
          radius="full"
          src=""
          fallback={<RxAvatar size={25} />}
          size="6"
          className="border-4 border-zinc-700"
        />
        <FaPencil
          size={25}
          className="rounded-full absolute bottom-0 -right-4"
        />
      </Box>

      <Form className="space-y-9">
        <FormField name="user-name" className="space-y-2">
          <FormLabel>Name</FormLabel>
          <TextField.Root name="user-name" />
        </FormField>
        <FormField name="bio" className="space-y-2">
          <FormLabel>Bio</FormLabel>
          <TextArea name="bio" size="3" className="h-20" />
        </FormField>
      </Form>
    </Box>
  );
};

export default ProfileEditPage;
