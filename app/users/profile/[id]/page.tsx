import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { Avatar, Box, Flex, Tabs, Text } from "@radix-ui/themes";
import { List } from "@radix-ui/themes/dist/esm/components/tabs.js";
import { notFound } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import AboutTab from "./AboutTab";
import FollowButton from "./FollowButton";
import Followers from "./Followers";
import HomeTab from "./HomeTab";

interface Props {
  params: Promise<{ id: string }>;
}

const UserProfilePage = async ({ params }: Props) => {
  const session = await auth();
  if (!session || !session.user || !session.user.id) return null;

  const id = (await params).id;
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      blogs: true,
      followers: true,
      following: true,
    },
  });

  if (!user) return notFound();

  const isFollower = await prisma.follower.findFirst({
    where: { followerId: session.user.id, followingId: user.id },
  });

  return (
    <Box className="space-y-12 max-w-4xl mx-auto">
      <Flex className="flex-col md:flex-row gap-8">
        <Flex gap="4" className="flex-1">
          <Avatar src="" radius="full" size="5" fallback={<RxAvatar />} />
          <Flex gap="1" direction="column">
            <Text className="font-semibold text-lg">{user.name}</Text>
            <Text className="text-zinc-600 text-sm">
              {user.following.length} Followers
            </Text>
          </Flex>
        </Flex>
        <FollowButton followingId={user.id} isFollower={!!isFollower} />
      </Flex>
      <Box>
        <Tabs.Root defaultValue="tab1" orientation="vertical">
          <Tabs.List aria-label="tabs">
            <Tabs.Trigger value="tab1">Home</Tabs.Trigger>
            <Tabs.Trigger value="tab2">About</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1" className="my-8">
            <HomeTab user={user} blogs={user.blogs} />
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <AboutTab
              user={user}
              followers={user.following.length}
              following={user.followers.length}
            />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Box>
  );
};

export default UserProfilePage;
