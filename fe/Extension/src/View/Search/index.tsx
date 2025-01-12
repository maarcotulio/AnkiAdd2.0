import { useState } from "react";

import { Definition } from "../../components/Definition";
import { SearchBar } from "../../components/SearchBar";

import { DefinitonListAndPartOfSpeech } from "../../@types/Definition";
import { dictionary } from "../../api";

export function Search() {
  const [data, setData] = useState<[] | DefinitonListAndPartOfSpeech[][]>([]);

  async function handleListWords(data: string[]) {
    if (data.length === 1) {
      const response = await dictionary.getMeaning(data[0]);
      if (response) {
        return setData([response]);
      }
    }

    const response = await dictionary.listDefs(data);
    if (response) {
      setData(response);
    }
  }

  const hasData = data.length >= 1;

  return (
    <div className="w-full max-w-3xl h-full  flex flex-col items-center justify-center">
      <SearchBar onListWords={handleListWords} className="mb-10 sm:w-full" />

      {!hasData && (
        <div className="flex-1">
          <div className="w-full h-full max-w-60 max-h-60 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search-x"
            >
              <path d="m13.5 8.5-5 5" />
              <path d="m8.5 8.5 5 5" />
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <p className="text-gray-300 font-bold">Empty</p>
        </div>
      )}

      {hasData && (
        <div className="grid md:grid-rows-1 md:grid-cols-2 gap-4 h-auto md:p-0 p-8">
          {data.map((section) => (
            <Definition
              className="max-h-96 overflow-auto"
              title={section[0].word}
              data={section}
            />
          ))}
        </div>
      )}
    </div>
  );
}
