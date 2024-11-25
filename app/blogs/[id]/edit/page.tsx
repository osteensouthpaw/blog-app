import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import BlogFormWrapper from "@/app/blogs/[id]/edit/BlogFormWrapper";

interface Props {
  params: Promise<{ id: string }>;
}

const BlogEditPage = async (props: Props) => {
  const params = await props.params;
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!blog) return notFound();

  return <BlogFormWrapper blog={blog} />;
};

export default BlogEditPage;
