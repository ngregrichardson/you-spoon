import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  useTheme,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Sentencer from "sentencer";
import { useClipboard } from "use-clipboard-copy";
import logo from "./assets/images/icon.png";
import ThemeToggle from "./components/themeToggle";

const generateInsult = () => {
  return Sentencer.make("{{ adjective }} {{ noun }}");
};

const App = () => {
  const toast = useToast();
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const [insult, setInsult] = useState(generateInsult());
  const [hueRotate, setHueRotate] = useState(0);
  const { copy } = useClipboard();

  const handleGetNewInsult = () => setInsult(generateInsult());

  const handleCopy = () => {
    copy(insult);
    toast({
      status: "success",
      title: "Copied!",
      description: `${insult} was copied to your clipboard. Use it well!`,
      isClosable: true,
      duration: 3000,
      position: "bottom-right",
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor =
      colorMode === "light"
        ? theme.colors.white["500"]
        : theme.colors.black["500"];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

  return (
    <>
      <Stack
        as={Flex}
        flex={1}
        alignItems={"center"}
        direction={"column"}
        spacing={"30px"}
        padding={"30px"}
      >
        <Image
          src={logo}
          height={"25%"}
          objectFit={"contain"}
          cursor={"pointer"}
          sx={{ filter: `hue-rotate(${hueRotate}deg)` }}
          onClick={() => setHueRotate((curr) => (curr + 30) % 360)}
        />
        <Heading size={"2xl"} cursor={"copy"} onClick={handleCopy}>
          {insult}
        </Heading>
        <Button onClick={handleGetNewInsult}>Generate Insult</Button>
      </Stack>
      <Text
        as={Link}
        href={"https://iamnoah.dev"}
        isExternal
        marginY={"15px"}
        textAlign={"center"}
      >
        &copy; Noah Richardson {new Date().getFullYear()}
      </Text>
      <ThemeToggle />
    </>
  );
};

export default App;
