import prisma from "@/prisma/client";
import { Box, Flex, Heading, Link, Text, Card } from "@radix-ui/themes";
import NextLink from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";

const BlogsPage = async () => {
  const blogs = await prisma.blog.findMany();

  return (
    <Box className="space-y-6">
      <Heading className="text-zinc-800 font-bold" size="8">
        I Love Writing blogs About Techonology
      </Heading>
      <Text as="p" className="text-zinc-500 !mb-20">
        All of my long-form thoughts on programming, content creation,and more,
        collected in chronological order.
      </Text>
      <Flex direction="column" gap="6" className="md:border-l">
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
                <Text as="p" className="text-zinc-500">
                  {blog.content.split(" ").slice(0, 60).join(" ").concat("...")}
                </Text>
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

export default BlogsPage;
