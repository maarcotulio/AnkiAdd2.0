import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { SearchBar } from "../../components/SearchBar";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const parsedPathname = location.pathname.split("/").filter(Boolean);
  const isInDefinitionPage =
    parsedPathname[0] === "search" && parsedPathname.length > 1;

  function handleClickToHome() {
    navigate("/");
  }

  function handleClickToList() {
    navigate("/list");
  }

  function handleClickToDocumentation() {
    window.open("https://github.com/maarcotulio/AnkiAdd2.0", "_blank");
  }

  return (
    <div className="w-full flex items-center justify-center flex-col p-4 ">
      <header className="font-robotoSlab max-w-3xl w-full flex-col items-center justify-between h-24 md:h-14 pt-4 flex sm:flex-row">
        <div
          className="text-sail-400 dark:text-sail-300 font-bold hover:text-sail-500 hover:cursor-pointer transition duration-200"
          onClick={handleClickToHome}
        >
          AnkiAdd 2.0
        </div>

        {isInDefinitionPage && <SearchBar />}

        {!isInDefinitionPage && (
          <div className="flex md:gap-8 gap-4 text-center ">
            <span
              className="hover:text-sail-500 hover:cursor-pointer transition duration-200"
              onClick={handleClickToList}
            >
              List
            </span>
            <span
              className="hover:text-sail-500 hover:cursor-pointer transition duration-200"
              onClick={handleClickToDocumentation}
            >
              Documentation
            </span>
          </div>
        )}
      </header>

      <Outlet />
    </div>
  );
}
