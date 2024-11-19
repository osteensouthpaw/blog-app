import { Box, Flex, Heading, Skeleton, Text } from "@radix-ui/themes";

const BlogDetailLoadingPage = () => {
  return (
    <Box>
      <Text className="border-l-4 pl-3 space-y-4">
        <Skeleton>Date today</Skeleton>
      </Text>
      <Box className="space-y-6">
        <Skeleton height="20">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            cumque.
          </Text>
        </Skeleton>
        <Flex gap="2" mb="7">
          <Text>
            <Skeleton>Lorem</Skeleton>
          </Text>
          <Text>
            <Skeleton>Lorem</Skeleton>
          </Text>
        </Flex>
        <Skeleton>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            natus, quis quae quidem vitae ut praesentium voluptatem illo iste
            facilis nostrum officiis quia nisi, eligendi magnam sequi laboriosam
            ipsum! Excepturi tempora nemo consectetur quibusdam dignissimos
            cumque? Deserunt ea eveniet beatae saepe, aut quae nobis dolorem
            tempora cumque sint inventore odit est sapiente harum corporis.
            Aspernatur itaque nulla explicabo alias eos! Accusamus consequatur
            provident a quisquam rerum repellat sed eius quidem tempore. Minus
            fugiat reiciendis magni cupiditate quisquam harum soluta? Ipsam
            architecto praesentium ullam magnam nisi dolor, id, iure quaerat
            consequuntur excepturi mollitia sapiente porro? A praesentium quae
            fugit voluptates rem tempore voluptas iusto sunt. Possimus alias est
            labore enim. Recusandae esse ratione commodi aut blanditiis illum
            corporis laudantium animi, similique alias excepturi consequuntur
            hic debitis a ipsam quia! Minus tempore quis a quasi sapiente
            possimus ad quo. Suscipit excepturi ratione labore sit cupiditate,
            dolor autem deleniti cumque corporis, quia id.
          </Text>
        </Skeleton>
      </Box>
    </Box>
  );
};

export default BlogDetailLoadingPage;
