"use client";
import { toggleBlogLike } from "@/actions/toggleBlogLike";
import { toggleBookmark } from "@/actions/toggleBookmark";
import { Button, Flex, Text } from "@radix-ui/themes";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { RxBookmarkFilled } from "react-icons/rx";

interface Props {
  blogId: number;
  totalComments: number;
  totalLikes: number;
  isLikedByUser: boolean;
  isBookmarked: boolean;
  totalBookmarks: number;
}

const UserReaction = ({
  totalComments,
  totalLikes,
  totalBookmarks,
  blogId,
  isLikedByUser,
  isBookmarked,
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
      <Button
        variant="ghost"
        color="gray"
        className="cursor-pointer"
        onClick={() => toggleBookmark(blogId)}
      >
        <Flex gap="2" align="stretch">
          {isBookmarked ? (
            <RxBookmarkFilled size={18} />
          ) : (
            <MdOutlineBookmarkAdd size={20} />
          )}
          <Text>{totalBookmarks}</Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default UserReaction;
