import { User } from "@prisma/client";
import { Box, Flex, Button, Text, Link } from "@radix-ui/themes";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

interface Props {
  user: User;
  followers: number;
  following: number;
}

const AboutTab = ({ user, followers, following }: Props) => {
  return (
    <Box className="space-y-4">
      <Text as="p" className="text-zinc-600 py-6 border-b">
        {user.bio}
      </Text>
      <Text as="p">Member since {user.createdAt.toDateString()}</Text>
      <Box className="space-y-8">
        <Flex gap="4" className="text-sm">
          <Link>{followers} Followers</Link>
          <Link>{following} Following</Link>
        </Flex>
        <Flex gap="5">
          <Text className="text-zinc-600">Connect with osteen</Text>
          <Flex gap="4">
            <FaTwitter size={20} />
            <FaFacebook size={20} />
            <FaInstagram size={20} />
          </Flex>
        </Flex>
      </Box>

      <Box className="border-t space-y-4">
        <Text as="p" className="font-semibold mt-8 text-lg text-zinc-700">
          Get an email whenever John Battelle publishes?
        </Text>
        <Button radius="full" className="p-3">
          <Flex gap="2">
            <MdOutlineMailOutline size={20} />
            <Text as="p">Subscribe</Text>
          </Flex>
        </Button>
      </Box>
    </Box>
  );
};

export default AboutTab;
