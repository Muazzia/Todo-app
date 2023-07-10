import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useRef } from "react";
import useSearchStore from "../searchStore";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchstr = useSearchStore((s) => s.setSearchStr);
  return (
    <InputGroup>
      <InputLeftAddon children={<BiSearchAlt2 />} />
      <Input
        placeholder="search..."
        mb={4}
        variant={"filled"}
        ref={ref}
        onChange={() => setSearchstr(ref.current?.value || "")}
      />
    </InputGroup>
  );
};

export default SearchBar;
