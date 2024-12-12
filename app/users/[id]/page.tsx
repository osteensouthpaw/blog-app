import BlogViewer from "@/app/blogs/_components/BlogViewer";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
} from "@radix-ui/themes";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { BiBookContent, BiRightArrowAlt } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import LatestBlogs from "../LatestBlogs";

const UserPage = async () => {
  const session = await auth();
  if (!session || !session.user) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { blogs: true },
  });

  if (!user) return notFound();
  if (user.id !== session?.user?.id) return null;

  const drafts = user.blogs.filter((blog) => !blog.isPublished);

  return (
    <Box className="max-w-3xl mx-auto space-y-11">
      <Box className="space-y-5">
        <Heading>Account</Heading>
        <Card className="p-8 space-y-7">
          <Flex align="center">
            <Flex gap="2" align="center" flexGrow="1">
              <Avatar
                size="4"
                radius="full"
                src={user.image!}
                fallback={<RxAvatar />}
              />
              <Text className="font-semibold">{user.name}</Text>
            </Flex>
            <NextLink href={`/users/${user.id}/edit`} className="block">
              <Button>Edit</Button>
            </NextLink>
          </Flex>
          <Flex>
            <Flex direction="column" flexGrow="1">
              <Text className="font-semibold">Email</Text>
              <Text className="text-zinc-500 text-sm">{user.email}</Text>
            </Flex>
            <Button>Edit</Button>
          </Flex>
        </Card>
      </Box>

      <LatestBlogs user={user} blogs={user.blogs} />

      <Box className="space-y-5">
        <Flex align="baseline">
          <Heading className="flex-1">Drafts</Heading>
          <Link href="#" color="gray">
            <Flex align="center" gap="2">
              <Text className="text-sm">View All</Text>
              <BiRightArrowAlt />
            </Flex>
          </Link>
        </Flex>
        <Card className="p-8 space-y-7">
          {drafts.length > 0 ? (
            <Flex gap="5" direction="column">
              {drafts.map((blog) => (
                <Box key={blog.id} className="space-y-2">
                  <Text className="font-semibold">{blog.title}</Text>
                  <BlogViewer
                    className="border-b text-zinc-500"
                    content={blog.content
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")
                      .concat("...")}
                  />
                </Box>
              ))}
            </Flex>
          ) : (
            <Box>
              <BiBookContent color="gray" size={50} />
              <Text className="text-zinc-500">
                You don't have any drafts yet
              </Text>
            </Box>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default UserPage;
