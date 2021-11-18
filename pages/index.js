import { Flex, Heading, Text, Link } from "@chakra-ui/layout";

const Page = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      backgroundColor="blackAlpha.900"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        href="https://discord.gg/XF6ZBGF9XF"
        _hover={{ textDecoration: "none" }}
      >
        <Heading fontFamily="Inter">
          <Text
            as="span"
            sx={{
              color: "transparent",
              lineHeight: 1,
              margin: 0,
              py: "5em",
              px: "5em",
              animationPlayState: "paused",

              background: `linear-gradient(0deg, rgba(230,77,77,1) 0%, rgba(187,138,67,1) 10%, rgba(204,156,19,1) 20%, rgba(5,210,64,1) 30%, rgba(31,227,163,1) 40%, rgba(72,190,204,1) 50%, rgba(105,114,247,1) 60%, rgba(208,99,254,1) 70%, rgba(255,53,209,1) 80%, rgba(255,0,214,1) 90%, rgba(255,0,0,1) 100%)`,
              backgroundClip: "text",
              backgroundSize: "100% 100%",
            }}
            _hover={{
              animationDuration: "2s",
              animationName: "anim",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationPlayState: "running",
            }}
          >
            makeroom
          </Text>
        </Heading>
      </Link>

      <style jsx>{`
        @keyframes anim {
          from {
            background-position-y: 0;
          }
          to {
            background-position-y: 10em;
          }
        }
      `}</style>
    </Flex>
  );
};

export default Page;
