"use client";
import { SEARCH_PLACEHOLDER } from "@constants/webInfo";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function SearchAutoComplete({
  className,
}: {
  className: string;
}) {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSelect = (item: any) => {
    console.log(item);
  };

  return (
    <ReactSearchAutocomplete
      className={className}
      items={items}
      onSelect={handleOnSelect}
      // formatResult={(item: any) => {
      //   return GraphSearchResult(item);
      // }}
      styling={{
        border: "2.5px solid #FFD29D",
        lineColor: "rgba(0,0,0,.35)",
        boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 12px 0px",
        fontFamily: "Belanosima",
      }}
      placeholder={SEARCH_PLACEHOLDER}
      showIcon={false}
      maxResults={5}
      autoFocus={true}
    />
  );
}
