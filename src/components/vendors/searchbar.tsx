import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Button } from "../ui/button";
import { useSearchParams } from "react-router";
import { useState } from "react";

export default function VendorSearchbar() {
  const [_searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch() {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (!searchQuery) {
        params.delete("search");
      } else {
        params.set("search", searchQuery);
      }

      return params;
    });
  }

  return (
    <InputGroup className="rounded-full bg-zinc-100 shadow-none border-none h-12 px-2">
      <InputGroupInput
        placeholder="جست و جو"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Button className="rounded-full h-7" onClick={handleSearch}>
          جستجو
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
