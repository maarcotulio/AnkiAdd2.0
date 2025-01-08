import { useEffect, useMemo, useState } from "react";
import { Definition } from "../../../components/Definition";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { URL } from "../../../config/serverUrl";
import { toast } from "react-toastify";

export function Search() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const parsedPathname = useMemo(() => {
    return location.pathname.split("/").filter(Boolean);
  }, [location.pathname]);

  const hasData = data?.length >= 1;

  useEffect(() => {
    axios
      .get(URL + "search/en/" + parsedPathname[1])
      .then((response) => {
        setData(response?.data);
      })
      .catch(() => {
        toast.error("Error to connect in the dictionary");
      });
  }, [parsedPathname]);

  return (
    <div className=" w-full h-full mt-20 flex flex-col items-center justify-center">
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
          <p className="text-gray-300 font-bold">Word not found</p>
        </div>
      )}

      {hasData && <Definition title={parsedPathname[1]} data={data} />}
    </div>
  );
}
