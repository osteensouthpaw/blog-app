import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
} from "@radix-ui/themes";
import { BiRightArrowAlt } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

const UserProfilePage = () => {
  return (
    <Box className="max-w-3xl mx-auto space-y-11">
      <Box className="space-y-5">
        <Heading>Account</Heading>
        <Card className="p-8 space-y-7">
          <Flex align="center">
            <Flex gap="2" align="center" flexGrow="1">
              <Avatar
                size="4"
                radius="full"
                src={"image"!}
                fallback={<RxAvatar />}
              />
              <Text className="font-semibold">My name</Text>
            </Flex>
            <Button>Edit</Button>
          </Flex>
          <Flex>
            <Flex direction="column" flexGrow="1">
              <Text className="font-semibold">Email</Text>
              <Text className="text-zinc-500 text-sm">email@gmail.com</Text>
            </Flex>
            <Button>Edit</Button>
          </Flex>
        </Card>
      </Box>

      <Box className="space-y-5">
        <Flex align="baseline">
          <Heading className="flex-1">Latest Publications</Heading>
          <Link href="#" color="gray">
            <Flex align="center" gap="2">
              <Text className="text-sm">View All</Text>
              <BiRightArrowAlt />
            </Flex>
          </Link>
        </Flex>
        <Card className="p-8 space-y-7">
          <Flex gap="5" direction="column" className="text-zinc-600">
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
          </Flex>
          <Button className="font-semibold text-lg p-5">
            + Create New Blog
          </Button>
        </Card>
      </Box>

      <Box className="space-y-5">
        <Flex align="baseline">
          <Heading className="flex-1">Drafts</Heading>
          <Link href="#" color="gray">
            <Flex align="center" gap="2">
              <Text className="text-sm">View All</Text>
              <BiRightArrowAlt />
            </Flex>
          </Link>
        </Flex>
        <Card className="p-8 space-y-7">
          <Flex gap="5" direction="column" className="text-zinc-600">
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
            <Text className="border-b">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non facere culpa nemo ullam nihil maxime dolores cum iste enim.
            </Text>
          </Flex>
        </Card>
      </Box>
    </Box>
  );
};

export default UserProfilePage;
