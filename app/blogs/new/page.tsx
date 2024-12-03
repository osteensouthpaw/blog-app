import prisma from "@/prisma/client";
import BlogForm from "../_components/BlogForm";

const NewBlogPage = async () => {
  const categories = await prisma.category.findMany();

  return <BlogForm categories={categories} />;
};

export default NewBlogPage;
