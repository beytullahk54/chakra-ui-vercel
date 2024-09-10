import { Box, Heading, Text } from "@chakra-ui/react";

const DashboardCard = ({ title, value, description }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p="6"
      w="full"
      textAlign="center"
    >
      <Heading size="md" mb="2">{title}</Heading>
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        {value}
      </Text>
      <Text color="gray.500">{description}</Text>
    </Box>
  );
};

export default DashboardCard;
