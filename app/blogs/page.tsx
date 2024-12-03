import prisma from "@/prisma/client";
import { Badge, Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";
import BlogViewer from "./_components/BlogViewer";

const BlogsPage = async () => {
  const blogs = await prisma.blog.findMany();
  const categories = await prisma.category.findMany();

  return (
    <Box className="space-y-6">
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
      <Flex gap="3" wrap="wrap">
        <Badge size="3" variant="surface">
          All
        </Badge>
        {categories.map((category) => (
          <Badge size="3" key={category.id}>
            {category.name}
          </Badge>
        ))}
      </Flex>
      <Flex direction="column" gap="6" className="md:border-l max-w-5xl">
        {blogs.map((blog) => (
          <Flex key={blog.id} className="flex-col md:flex-row gap-2">
            <Text
              as="p"
              className="text-zinc-400 text-xs md:text-sm pl-3 border-l-4 md:border-none flex-shrink-0 md:w-36 py-4"
            >
              {blog.createdAt.toDateString()}
            </Text>
            <NextLink href={`/blogs/${blog.id}`} legacyBehavior>
              <Flex
                flexGrow="1"
                gap="4"
                direction="column"
                className="hover:bg-zinc-50 transition-colors rounded-lg p-4 cursor-pointer"
              >
                <Heading as="h3" size="4" className="font-bold">
                  {blog.title}
                </Heading>
                <BlogViewer
                  content={blog.content
                    .split(" ")
                    .slice(0, 40)
                    .join(" ")
                    .concat("...")}
                />
                <Link size="2">
                  Read article
                  <RxDoubleArrowRight size={12} className="inline-flex m-1" />
                </Link>
              </Flex>
            </NextLink>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export const dynamic = "force-dynamic";

export default BlogsPage;
