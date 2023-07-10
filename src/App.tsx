import { Box, Button, HStack, Heading, useColorMode } from "@chakra-ui/react";
import "./App.css";
import NotesGrid from "./components/NotesGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        marginStart={{ base: 4, md: "5%", lg: "10%" }}
        marginEnd={{ base: 4, md: "5%", lg: "10%" }}
      >
        <HStack my={3} justifyContent={"space-between"}>
          <Heading>Notes</Heading>
          <Button onClick={toggleColorMode}>Toggle Theme</Button>
        </HStack>
        <SearchBar />
        <NotesGrid />
      </Box>
    </>
  );
}

export default App;
