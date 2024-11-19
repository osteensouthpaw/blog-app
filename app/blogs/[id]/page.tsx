import prisma from "@/prisma/client";
import { Box, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const BlogDetailPage = async ({ params }: Props) => {
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!blog) return notFound();

  return (
    <Box>
      <Text className="text- text-zinc-400 border-l-4 pl-3">
        {blog.createdAt.toDateString()}
      </Text>
      <Box className="space-y-9">
        <Heading size="8">{blog.title}</Heading>
        <Text as="p" className="text-zinc-600">
          {blog.content}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogDetailPage;
