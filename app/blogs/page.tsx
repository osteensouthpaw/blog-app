import prisma from "@/prisma/client";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import BlogCard from "./BlogCard";
import CategoriesFilter from "./CategoriesFilter";

interface Props {
  searchParams: Promise<{ category: string }>;
}

const BlogsPage = async ({ searchParams }: Props) => {
  const categoryId = (await searchParams).category;
  const blogs = await prisma.blog.findMany({
    where: {
      categoryId: parseInt(categoryId) || undefined,
    },
    orderBy: { createdAt: "desc" },
  });
  const categories = await prisma.category.findMany();

  return (
    <Box className="space-y-6 max-w-5xl">
      <Heading className="text-zinc-800 font-bold" size="8">
        Your Blog. Your Voice. Your World. 🌎
      </Heading>
      <Text as="p" className="text-zinc-500 !mb-20">
        Dive into a world of insights, stories, and inspiration—crafted just for
        you.
        <br />
        Dive into fresh perspectives and timeless tales.
        <br />
        Explore, engage , and let your voice be heard!
      </Text>
      <CategoriesFilter categories={categories} />
      <Flex direction="column" gap="6" className="md:border-l max-w-5xl">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </Flex>
    </Box>
  );
};

export default BlogsPage;
