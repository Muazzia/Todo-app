import { SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import useSearchStore from "../searchStore";
import useAppStore from "../store";
import EditingNote from "./EditingNote";
import Note from "./Note";

const NotesGrid = () => {
  const setNotes = useAppStore((s) => s.setNotes);
  const notes = useAppStore((s) => s.notes);

  const searchStr = useSearchStore((s) => s.searchStr);
  const data = searchStr
    ? notes.filter((n) =>
        n.text.toLowerCase().includes(searchStr.toLowerCase())
      )
    : notes;

  useEffect(() => {
    const t = localStorage.getItem("react-todoList") || "[]";
    const temp = JSON.parse(t);
    if (temp) {
      setNotes(temp);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-todoList", JSON.stringify(notes));
  }, [notes]);

  // if (data.length === 0) return <Box>No Data</Box>;
  return (
    <SimpleGrid gap={3} columns={{ sm: 1, md: 2, lg: 4, "2xl": 6 }}>
      {data.map((n) => (
        <Note note={n} key={n.id} />
      ))}
      {!searchStr && <EditingNote />}
    </SimpleGrid>
  );
};

export default NotesGrid;
