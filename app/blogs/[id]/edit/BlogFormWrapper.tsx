"use client";
import React from "react";
import dynamic from "next/dynamic";
import BlogFormSkeleton from "@/app/blogs/_components/BlogFormSkeleton";
import { Blog } from "@prisma/client";

const BlogForm = dynamic(() => import("@/app/blogs/_components/BlogForm"), {
  ssr: false,
  loading: () => <BlogFormSkeleton />,
});

const BlogFormWrapper = ({ blog }: { blog: Blog }) => {
  return <BlogForm blog={blog} />;
};

export default BlogFormWrapper;
