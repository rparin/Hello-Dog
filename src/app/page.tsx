"use client";
import { SEARCH_PLACEHOLDER } from "@constants/webInfo";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Link from "next/link";
import Image from "next/image";
import { webLogo } from "@/constants/icons";
import Footer from "@/components/Footer";

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
      <div className="h-dvh rounded-[45px] rounded-b-[50px] bg-border p-[25px] pb-[50px]">
        <div className="h-full w-full overflow-auto rounded-[20px] rounded-b-[10px] border bg-innerBg">
          <div className="flex h-[60vh] flex-col items-center justify-center gap-3 text-center">
            <Link href={"/"}>
              <Image
                className="h-auto w-72 md:w-96"
                src={webLogo.img}
                alt={webLogo.alt}
              />
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
                fontFamily: "Belanosima",
              }}
              placeholder={SEARCH_PLACEHOLDER}
              showIcon={false}
              maxResults={5}
              autoFocus={true}
            />
          </div>
        </div>
        <Footer className="mt-1 text-black opacity-70" />
      </div>
    </>
  );
}
