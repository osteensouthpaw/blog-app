import BlogViewer from "@/app/blogs/_components/BlogViewer";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { Box, Flex, Heading, Card, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const LikedPosts = async ({ userId }: { userId: string }) => {
  const blogs = await prisma.blog.findMany({
    where: { likes: { some: { userId } } },
    include: { likes: true },
  });

  return (
    <Box className="space-y-5">
      <Flex align="baseline">
        <Heading className="flex-1">
          Liked Publications ({blogs.length})
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
              <Link
                href={`/blogs/${blog.id}`}
                className="font-semibold hover:border-b"
              >
                {blog.title}
              </Link>
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
      </Card>
    </Box>
  );
};

export default LikedPosts;
