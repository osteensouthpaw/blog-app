"use client";
import dynamic from "next/dynamic";
import React from "react";
import BlogFormSkeleton from "../_components/BlogFormSkeleton";

const BlogForm = dynamic(() => import("@/app/blogs/_components/BlogForm"), {
  ssr: false,
  loading: () => <BlogFormSkeleton />,
});

const NewBlogPage = () => {
  return <BlogForm />;
};

export default NewBlogPage;
