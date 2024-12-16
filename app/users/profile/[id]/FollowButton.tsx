"use client";
import { toggleFollow } from "@/actions/toggleFollow";
import { Button } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface Props {
  followingId: string;
  isFollower: boolean;
}

const FollowButton = ({ followingId, isFollower }: Props) => {
  const { data: session } = useSession();
  const variant = isFollower ? "outline" : "solid";

  return (
    <>
      {session &&
      session.user &&
      session.user.id &&
      session.user.id === followingId ? (
        <Link href={`/users/${session.user.id}/edit`}>
          <Button radius="full" className="cursor-pointer w-full md:w-max px-6">
            Edit Profile
          </Button>
        </Link>
      ) : (
        <Button
          radius="full"
          variant={variant}
          className="cursor-pointer w-full md:w-max px-6"
          onClick={() => toggleFollow(followingId)}
        >
          {isFollower ? "Unfollow" : "Follow"}
        </Button>
      )}
    </>
  );
};

export default FollowButton;
