import React from "react";
import BlogForm from "../../_components/BlogForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const BlogEditPage = async ({ params }: Props) => {
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!blog) return notFound();

  return <BlogForm blog={blog} />;
};

export default BlogEditPage;
