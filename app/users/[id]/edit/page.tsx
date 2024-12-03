import prisma from "@/prisma/client";
import { Avatar, Box, Button, Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { FaPencil } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import UserEditForm from "./UserEditForm";
import { auth } from "@/auth";

interface Props {
  params: Promise<{ id: string }>;
}

const ProfileEditPage = async (props: Props) => {
  const session = await auth();
  const params = await props.params;

  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) return notFound();
  if (user.id !== session?.user?.id) return null;

  return (
    <Box className="max-w-xl mx-auto space-y-11">
      <Flex>
        <Heading className="flex-1">Edit Profile</Heading>
        <Button>Save</Button>
      </Flex>
      <Box className="relative max-w-max">
        <Avatar
          radius="full"
          src={user.image!}
          fallback={<RxAvatar size={25} />}
          size="6"
          className="border-4 border-zinc-700"
        />
        <FaPencil
          size={25}
          className="rounded-full absolute bottom-0 -right-4"
        />
      </Box>
      <UserEditForm user={user} />
    </Box>
  );
};

export default ProfileEditPage;
