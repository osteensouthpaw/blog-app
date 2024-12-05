import { Flex, Text } from "@radix-ui/themes";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      gap="3"
      direction="column"
      p="3"
      className="border-t-2"
      style={{ borderTop: "1px" }}
    >
      <Text as="p" className="mx-auto">
        © 2024. All rights reserved.
      </Text>
      <Flex gap="3" className="mx-auto">
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
      </Flex>
      <Flex gap="3" className="mx-auto">
        <Text as="p">Terms of Service</Text>
        <Text as="p">Privacy Policy</Text>
        <Text as="p">Contact Us</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
