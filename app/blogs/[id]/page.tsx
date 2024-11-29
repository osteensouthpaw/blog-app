import prisma from "@/prisma/client";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RxPencil2 } from "react-icons/rx";
import DeleteBlogButton from "./DeleteBlogButton";
import React from "react";
import BlogViewer from "../_components/BlogViewer";
import UserHandle from "../_components/UserHandle";

interface Props {
  params: Promise<{ id: string }>;
}

const BlogDetailPage = async (props: Props) => {
  const params = await props.params;
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!blog) return notFound();

  return (
    <Box>
      <Text className="text-zinc-400 border-l-4 pl-3">
        {blog.createdAt.toDateString()}
      </Text>
      <Box>
        <UserHandle />
        <Heading size="8">{blog.title}</Heading>
        <Flex gap="2" mb="7">
          <Button variant="soft">
            <Link href={`/blogs/${blog.id}/edit`}>
              <RxPencil2 size={15} />
            </Link>
          </Button>
          <DeleteBlogButton issueId={blog.id} />
        </Flex>
        <BlogViewer content={blog.content} />
      </Box>
    </Box>
  );
};

export default BlogDetailPage;
