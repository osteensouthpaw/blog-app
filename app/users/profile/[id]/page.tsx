import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { Avatar, Box, Button, Flex, Link, Tabs, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import LatestBlogs from "../../LatestBlogs";

interface Props {
  params: Promise<{ id: string }>;
}

const UserProfilePage = async ({ params }: Props) => {
  const session = auth();
  if (!session) return null;

  const id = (await params).id;
  const user = await prisma.user.findUnique({
    where: { id },
    include: { blogs: true },
  });

  if (!user) return notFound();

  return (
    <Box className="space-y-12 max-w-4xl mx-auto">
      <Flex className="flex-col md:flex-row gap-8">
        <Flex gap="4" className="flex-1">
          <Avatar src="" radius="full" size="5" fallback={<RxAvatar />} />
          <Flex gap="1" direction="column">
            <Text className="font-semibold text-lg">{user.name}</Text>
            <Text className="text-zinc-600 text-sm">43k Followers</Text>
          </Flex>
        </Flex>
        <Button radius="full" className="cursor-pointer w-full md:w-max px-6">
          Follow
        </Button>
      </Flex>
      <Box>
        <Tabs.Root defaultValue="tab1" orientation="vertical">
          <Tabs.List aria-label="tabs">
            <Tabs.Trigger value="tab1">Home</Tabs.Trigger>
            <Tabs.Trigger value="tab2">About</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1" className="my-8">
            <LatestBlogs user={user} blogs={user.blogs} />
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Box className="space-y-4">
              <Text as="p" className="text-zinc-600 py-6 border-b">
                {user.bio}
              </Text>
              <Text as="p">Member since {user.createdAt.toDateString()}</Text>
              <Box className="space-y-8">
                <Flex gap="4" className="text-sm">
                  <Link>43k Followers</Link>
                  <Link>1.4 Following</Link>
                </Flex>
                <Flex gap="5">
                  <Text className="text-zinc-600">Connect with osteen</Text>
                  <Flex gap="4">
                    <FaTwitter size={20} />
                    <FaFacebook size={20} />
                    <FaInstagram size={20} />
                  </Flex>
                </Flex>
              </Box>

              <Box className="border-t space-y-4">
                <Text
                  as="p"
                  className="font-semibold mt-8 text-lg text-zinc-700"
                >
                  Get an email whenever John Battelle publishes ?
                </Text>
                <Button radius="full" className="p-3">
                  <Flex gap="2">
                    <MdOutlineMailOutline size={20} />
                    <Text as="p">Subscribe</Text>
                  </Flex>
                </Button>
              </Box>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Box>
  );
};

export default UserProfilePage;
