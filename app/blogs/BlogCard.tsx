import { Flex, Heading, Text, Link } from "@radix-ui/themes";
import NextLink from "next/link";
import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import BlogViewer from "./_components/BlogViewer";
import { Blog } from "@prisma/client";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Flex key={blog.id} className="flex-col md:flex-row md:gap-2">
      <Text
        as="p"
        className="text-zinc-400 text-xs md:text-sm pl-3 md:pl-2 border-l-4 md:border-none flex-shrink-0 md:w-36 md:py-4 py-1"
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
  );
};

export default BlogCard;
