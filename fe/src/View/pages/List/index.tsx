import { useState } from "react";
import { Definition } from "../../../components/Definition";
import axios from "axios";
import { SearchInput } from "../../../components/SearchInput";
import { URL } from "../../../config/serverUrl";
import { toast } from "react-toastify";
import { SectionProps } from "../../../utils/interface";

export function List() {
  const [data, setData] = useState([]);
  const hasData = data?.length >= 1;

  async function handleListWords(data: string[]) {
    const response = await axios.post(URL + "list/en/", data).catch(() => {
      toast.error("Error to connect in the dictionary");
    });
    setData(response!.data || []);
  }

  return (
    <div className=" w-full max-w-3xl h-full mt-20 flex flex-col items-center justify-center">
      <SearchInput onListWords={handleListWords} className="mb-10 sm:w-full" />

      {!hasData && (
        <div className="flex-1 mt-10">
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
          {data.map((section: SectionProps[]) => (
            <Definition
              className="max-h-96 overflow-auto"
              title={section[0].word}
              data={[section[0]]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
