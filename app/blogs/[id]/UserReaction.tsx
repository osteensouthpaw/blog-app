"use client";
import { toggleBlogLike } from "@/actions/toggleBlogLike";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import {
  BiBookmark,
  BiBookmarkPlus,
  BiComment,
  BiLike,
  BiSolidLike,
} from "react-icons/bi";
import {
  MdBookmarkAdd,
  MdOutlineBookmarkAdd,
  MdOutlineBookmarkAdded,
} from "react-icons/md";
import { RxBookmarkFilled } from "react-icons/rx";

interface Props {
  blogId: number;
  totalComments: number;
  totalLikes: number;
  isLikedByUser: boolean;
}

const UserReaction = ({
  totalComments,
  totalLikes,
  blogId,
  isLikedByUser,
}: Props) => {
  return (
    <Flex className="border-y p-2 text-zinc-500 mt-5" gap="9">
      <Button variant="ghost" color="gray" className="cursor-pointer">
        <Flex gap="2" align="stretch">
          <BiComment size={20} />
          <Text>{totalComments}</Text>
        </Flex>
      </Button>
      <Button
        variant="ghost"
        color="gray"
        className="cursor-pointer"
        onClick={() => toggleBlogLike(blogId)}
      >
        <Flex gap="2" align="stretch">
          {isLikedByUser ? <BiSolidLike size={20} /> : <BiLike size={20} />}
          <Text>{totalLikes}</Text>
        </Flex>
      </Button>
      <Button variant="ghost" color="gray" className="cursor-pointer">
        <Flex gap="2" align="stretch">
          {true ? (
            <MdOutlineBookmarkAdd size={20} />
          ) : (
            <RxBookmarkFilled size={18} />
          )}
          <Text>20</Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default UserReaction;
