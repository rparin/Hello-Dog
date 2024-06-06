"use client";
import { SEARCH_PLACEHOLDER } from "@constants/webInfo";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { dogItem, dogBreedList } from "@data/DogBreedList";
import { useRouter } from "next/navigation";

export default function SearchAutoComplete({
  className,
}: {
  className: string;
}) {
  const router = useRouter();
  const handleOnSelect = (item: dogItem) => {
    router.push(`/${item.name.replace(/ /g, "-")}`);
  };

  return (
    <ReactSearchAutocomplete
      className={className}
      items={dogBreedList}
      onSelect={handleOnSelect}
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
