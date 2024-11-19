import { Skeleton, Box, Text, Flex, Heading } from "@radix-ui/themes";
import React from "react";

const BlogsLoadingPage = () => {
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <Box mt="9" className="space-y-6">
      <Skeleton>
        <Heading className="text-zinc-800 font-bold" size="8">
          Lorem ipsum dolor sit amet consectetur
        </Heading>
      </Skeleton>

      <Skeleton>
        <Text as="p" className="text-zinc-500 !mb-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia est
          pariatur tempore quibusdam ratione! .
        </Text>
      </Skeleton>

      <Flex direction="column" gap="6" className="md:border-l">
        {blogs.map((blog) => (
          <Flex key={blog} className="flex-col md:flex-row gap-2">
            <Skeleton>
              <Text
                as="p"
                className="text-zinc-400 text-xs md:text-sm md:w-1/6 pl-3 border-l-4 md:border-none"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                asperiores?
              </Text>
            </Skeleton>

            <Flex flexGrow="1" gap="4" direction="column">
              <Skeleton>
                <Heading as="h3" size="4" className="font-bold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                  architecto fugit dicta repudiandae, magnam consectetur amet
                  dolorum libero molestiae nemo!
                </Heading>
              </Skeleton>

              <Skeleton>
                <Text as="p" className="text-zinc-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  at nemo inventore quisquam rem soluta, quod aspernatur in
                  totam dolores exercitationem, saepe nulla veniam commodi nobis
                  recusandae? Ex sint odio nostrum eius facilis cum consequatur
                  et laudantium laboriosam deserunt labore voluptatem, quibusdam
                  sit iure possimus quo minima pariatur perferendis nihil.
                </Text>
              </Skeleton>
              <Skeleton>
                <Text size="2">Read article</Text>
              </Skeleton>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default BlogsLoadingPage;
