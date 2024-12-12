"use client";
import { Box, Flex, Heading, Card, Button, Text, Link } from "@radix-ui/themes";
import NextLink from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import BlogViewer from "../blogs/_components/BlogViewer";
import { Blog, User } from "@prisma/client";
import { useSession } from "next-auth/react";

interface Props {
  blogs: Blog[];
  user: User;
}

const LatestBlogs = ({ blogs, user }: Props) => {
  const { data: session } = useSession();
  return (
    <Box className="space-y-5">
      <Flex align="baseline">
        <Heading className="flex-1">
          Latest Publications ({blogs.length})
        </Heading>
        {blogs.length && (
          <Link href="#" color="gray">
            <Flex align="center" gap="2">
              <Text className="text-sm">View All</Text>
              <BiRightArrowAlt />
            </Flex>
          </Link>
        )}
      </Flex>
      <Card className="p-7 space-y-7">
        <Flex gap="5" direction="column">
          {blogs.map((blog) => (
            <Box key={blog.id} className="space-y-2">
              <NextLink
                href={`/blogs/${blog.id}`}
                className="font-semibold hover:border-b"
              >
                {blog.title}
              </NextLink>
              <BlogViewer
                className="border-b text-zinc-500"
                content={blog.content
                  .split(" ")
                  .slice(0, 30)
                  .join(" ")
                  .concat("...")}
              />
            </Box>
          ))}
        </Flex>
        {session && session.user && session.user.id === user.id && (
          <NextLink href="/blogs/new" className="block">
            <Button className="font-semibold">Create New Blog</Button>
          </NextLink>
        )}
      </Card>
    </Box>
  );
};

export default LatestBlogs;
