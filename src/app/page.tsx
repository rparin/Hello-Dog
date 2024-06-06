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
      <div className="h-dvh w-dvw bg-muted">
        <div className="h-full w-full rounded-[45px] rounded-b-[50px] bg-border p-[25px] pb-[50px]">
          <div className="h-full w-full overflow-auto rounded-[20px] rounded-b-[10px] border bg-background">
            <div className="flex h-[80vh] flex-col items-center justify-center text-center">
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
                styling={{
                  border: "2.5px solid #FFD29D",
                  lineColor: "rgba(0,0,0,.35)",
                  boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 12px 0px",
                }}
                placeholder={SEARCH_PLACEHOLDER}
                showIcon={false}
                maxResults={5}
                autoFocus={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
