import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { GiTrashCan } from "react-icons/gi";
import useAppStore, { NoteProp } from "../store";

interface Props {
  note: NoteProp;
}

const Note = ({ note }: Props) => {
  const deleteNode = useAppStore((s) => s.deleteNode);
  return (
    <Flex
      bg={"#Fef68a"}
      direction={"column"}
      justify={"space-between"}
      borderRadius={"10px"}
      minHeight={"170px"}
      padding={3}
    >
      <Text>{note.text}</Text>
      <HStack justify={"space-between"}>
        <Text>{note.date}</Text>
        <IconButton
          display={"flex"}
          variant={"unstyled"}
          color={"black"}
          icon={<GiTrashCan size={"25px"} />}
          aria-label="trash-can"
          onClick={() => deleteNode(note)}
        />
      </HStack>
    </Flex>
  );
};

export default Note;
