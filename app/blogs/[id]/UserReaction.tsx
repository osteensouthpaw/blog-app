"use client";
import { toggleBlogLike } from "@/actions/toggleBlogLike";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

interface Props {
  blogId: number;
  totalComments: number;
  totalLikes: number;
}

const UserReaction = ({ totalComments, totalLikes, blogId }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState("");

  const likePost = async () => {
    try {
      await toggleBlogLike(blogId);
      setIsLiked((liked) => !liked);
    } catch (error) {
      setIsLiked((liked) => !liked);
      setError("An error occured");
    }
  };

  return (
    <Flex className="border-y p-2 text-zinc-500 mt-5" gap="9">
      <Button variant="ghost" color="gray" className="cursor-pointer">
        <Flex gap="2" align="center">
          <BiComment size={20} />
          <Text>{totalComments}</Text>
        </Flex>
      </Button>
      <Button
        variant="ghost"
        color="gray"
        className="cursor-pointer"
        onClick={likePost}
      >
        <Flex gap="2" align="center">
          {isLiked ? <BiLike size={20} /> : <BiSolidLike size={20} />}
          <Text>{totalLikes}</Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default UserReaction;
