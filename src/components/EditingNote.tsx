import { Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useRef, useState } from "react";
import useAppStore from "../store";

const EditingNote = () => {
  const [wordsCount, setWordCount] = useState(0);
  const ref = useRef<HTMLInputElement>(null);
  const addNote = useAppStore((s) => s.addNote);
  //
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          const d = new Date();
          console.log(d.getMonth());

          addNote({
            id: nanoid(4),
            text: ref.current.value,
            date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
          });
          ref.current.value = "";
          setWordCount(0);
        }
      }}
    >
      <Flex
        bg={"#176B87"}
        color={"white"}
        direction={"column"}
        justify={"space-between"}
        borderRadius={"10px"}
        minHeight={"170px"}
        padding={3}
      >
        <Input
          variant="unstyled"
          placeholder="Type Here..."
          _placeholder={{ opacity: 1, color: "white.50" }}
          ref={ref}
          isRequired
          onChange={() => {
            if (ref.current) setWordCount(ref.current.value.length);
          }}
          maxLength={200}
        />
        <HStack justify={"space-between"}>
          <Text color={"white"}>{200 - wordsCount} words remaining</Text>
          <Button size={"xs"} type="submit">
            Save
          </Button>
        </HStack>
      </Flex>
    </form>
  );
};

export default EditingNote;
