import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import BlogForm from "../../_components/BlogForm";

interface Props {
  params: Promise<{ id: string }>;
}

const BlogEditPage = async (props: Props) => {
  const session = await auth();
  const params = await props.params;
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });
  const categories = await prisma.category.findMany();

  if (!blog) return notFound();
  if (blog.userId !== session?.user?.id) return null;

  return <BlogForm blog={blog} categories={categories} />;
};

export default BlogEditPage;
