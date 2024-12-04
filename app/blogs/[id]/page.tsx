import prisma from "@/prisma/client";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RxPencil2 } from "react-icons/rx";
import BlogViewer from "../_components/BlogViewer";
import UserHandle from "../_components/UserHandle";
import DeleteBlogButton from "./DeleteBlogButton";
import { auth } from "@/auth";
import Comments from "./Comments";

interface Props {
  params: Promise<{ id: string }>;
}

const BlogDetailPage = async (props: Props) => {
  const session = await auth();
  const params = await props.params;
  const blog = await prisma.blog.findUnique({
    where: { id: parseInt(params.id) },
    include: { user: true },
  });

  if (!blog) return notFound();

  const isBlogOwner = session && session.user?.id == blog.userId;

  return (
    <Box>
      <Text className="text-zinc-400 border-l-4 pl-3">
        {blog.createdAt.toDateString()}
      </Text>
      <Box>
        <UserHandle user={blog.user!} />
        <Heading size="8">{blog.title}</Heading>
        {isBlogOwner && (
          <Flex gap="2">
            <Button variant="soft">
              <Link href={`/blogs/${blog.id}/edit`}>
                <RxPencil2 size={15} />
              </Link>
            </Button>
            <DeleteBlogButton issueId={blog.id} />
          </Flex>
        )}
        <BlogViewer className="mt-7" content={blog.content} />
        <Comments />
      </Box>
    </Box>
  );
};

export default BlogDetailPage;
