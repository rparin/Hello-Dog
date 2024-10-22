"use client";
import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { dogItem, dogBreedList } from "@data/DogBreedList";
import { useRouter } from "next/navigation";

export default function SearchAutoComplete({
  className,
  placeholder,
  autofocus,
}: {
  className?: string;
  autofocus?: boolean;
  placeholder?: string;
}) {
  // Hold search values
  const [searchValue, setSearch] = useState<undefined | string>(undefined);
  const router = useRouter();
  const handleOnSelect = (item: dogItem) => {
    router.push(`/${item.name.replace(/ /g, "_")}`);
  };
  const handleOnSearch = (value: string, results: dogItem[]) => {
    if (value.replace(/ /g, "") != "" && results.length > 0) {
      setSearch(results[0].name);
    }
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/${searchValue.replace(/ /g, "_")}`);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className={className}>
      <ReactSearchAutocomplete
        className="w-full"
        items={dogBreedList}
        onSelect={handleOnSelect}
        onSearch={handleOnSearch}
        // formatResult={(result: dogItem) => {
        //   return <>{result.name.replace(/_/g, "-")}</>;
        // }}
        styling={{
          border: "2.5px solid #FFD29D",
          lineColor: "rgba(0,0,0,.35)",
          boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 12px 0px",
          fontFamily: "Belanosima, Franklin Gothic Medium, Arial Black",
        }}
        placeholder={placeholder}
        showIcon={false}
        maxResults={5}
        autoFocus={autofocus}
      />
    </form>
  );
}
