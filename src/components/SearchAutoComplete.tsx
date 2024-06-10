"use client";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { dogItem, dogBreedList } from "@data/DogBreedList";
import { useRouter } from "next/navigation";

export default function SearchAutoComplete({
  className,
  placeholder,
  autofocus,
}: {
  className: string;
  autofocus?: boolean;
  placeholder?: string;
}) {
  const router = useRouter();
  const handleOnSelect = (item: dogItem) => {
    router.push(`/${item.name}`);
  };

  return (
    <ReactSearchAutocomplete
      className={className}
      items={dogBreedList}
      onSelect={handleOnSelect}
      formatResult={(result: dogItem) => {
        // Convert '_' and '!' to space
        return <>{result.name.replace(/!|_/g, " ")}</>;
      }}
      styling={{
        border: "2.5px solid #FFD29D",
        lineColor: "rgba(0,0,0,.35)",
        boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 12px 0px",
        fontFamily: "Belanosima",
      }}
      placeholder={placeholder}
      showIcon={false}
      maxResults={5}
      autoFocus={autofocus}
    />
  );
}
