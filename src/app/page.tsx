"use client";
import { APP_NAME, SEARCH_PLACEHOLDER } from "@/constants";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Link from "next/link";

export default function Home() {
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
    // the item selected
    console.log(item);
  };

  return (
    <>
      <div className="flex h-[80vh] flex-col items-center justify-center gap-7 text-center">
        <Link href={"/"}>
          <h1 className="text-3xl md:text-5xl">{APP_NAME}</h1>
        </Link>
        <ReactSearchAutocomplete
          className="w-[75%] md:w-[50%] lg:w-[30%]"
          items={items}
          onSelect={handleOnSelect}
          // formatResult={(item: any) => {
          //   return GraphSearchResult(item);
          // }}
          placeholder={SEARCH_PLACEHOLDER}
          showIcon={false}
          maxResults={5}
          autoFocus={true}
        />
      </div>
    </>
  );
}
