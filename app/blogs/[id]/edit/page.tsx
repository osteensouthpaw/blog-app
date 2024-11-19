import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import BlogFormSkeleton from "../../_components/BlogFormSkeleton";

const BlogForm = dynamic(() => import("@/app/blogs/_components/BlogForm"), {
  ssr: false,
  loading: () => <BlogFormSkeleton />,
});

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
