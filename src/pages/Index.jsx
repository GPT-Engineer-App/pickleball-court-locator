import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";

// Sample data for pickleball court locations
const pickleballCourts = [
  {
    name: "Central Park Courts",
    address: "123 Park Avenue, New York, NY",
    phone: "123-456-7890",
    website: "https://centralparkcourts.com",
    imageUrl: "https://images.unsplash.com/photo-1686052903991-fedc0903ad4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDZW50cmFsJTIwUGFyayUyMFBpY2tsZWJhbGwlMjBDb3VydHN8ZW58MHx8fHwxNzA4OTY2Nzk4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Sunnyvale Pickleball Center",
    address: "207 Van Vorst St, Jersey City, NJ",
    phone: "098-765-4321",
    website: "https://sunnyvalepickleball.com",
    imageUrl: "https://images.unsplash.com/photo-1592096304832-62463bfdc822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTdW5ueXZhbGUlMjBQaWNrbGViYWxsJTIwQ291cnRzfGVufDB8fHx8MTcwODk2Njc5OXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Lakeview Pickleball Arena",
    address: "789 Lake Road, Orlando, FL",
    phone: "555-123-4567",
    website: "https://lakeviewpickleball.com",
    imageUrl: "https://images.unsplash.com/photo-1543448701-ad037419da6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMYWtldmlldyUyMFBpY2tsZWJhbGwlMjBDb3VydHN8ZW58MHx8fHwxNzA4OTY2Nzk5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" textAlign="center">
          Public Pickleball Court Locations
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {pickleballCourts.map((court, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={court.imageUrl} alt={court.name} borderRadius="md" />
              <VStack align="stretch" mt={4}>
                <Heading as="h3" size="lg">
                  {court.name}
                </Heading>
                <Text fontSize="md">
                  <FaMapMarkerAlt /> {court.address}
                </Text>
                <HStack spacing={2} alignItems="center">
                  <IconButton aria-label="Call court" icon={<FaPhone />} isRound size="sm" variant="outline" />
                  <Text fontSize="sm">{court.phone}</Text>
                </HStack>
                <HStack spacing={2} alignItems="center">
                  <IconButton aria-label="Visit website" icon={<FaGlobe />} isRound size="sm" variant="outline" />
                  <Text fontSize="sm">{court.website}</Text>
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
