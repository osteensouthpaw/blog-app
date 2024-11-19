import prisma from "@/prisma/client";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { RxPencil2 } from "react-icons/rx";

interface Props {
  params: { id: string };
}

const BlogDetailPage = async ({ params }: Props) => {
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!blog) return notFound();

  return (
    <Box>
      <Text className="text- text-zinc-400 border-l-4 pl-3">
        {blog.createdAt.toDateString()}
      </Text>
      <Box>
        <Heading size="8">{blog.title}</Heading>
        <Flex gap="2" mb="7">
          <Button variant="soft">
            <Link href={`/blogs/${blog.id}/edit`}>
              <RxPencil2 size={15} />
            </Link>
          </Button>
          <Button color="red" variant="soft">
            <BiTrash size={15} />
          </Button>
        </Flex>
        <Text as="p" className="text-zinc-600">
          {blog.content}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogDetailPage;