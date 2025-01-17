import { ComponentProps } from "react";

import { useSearchBar } from "./useSearchBar";

import { cn } from "../../utils/cn";

interface SearchBarProps extends ComponentProps<"textarea"> {
  onListWords(data: string[]): void;
}

export function SearchBar({
  className,
  onListWords,
  ...props
}: SearchBarProps) {
  const { handlePressKey, handleSearch, setValue } = useSearchBar({
    onListWords,
  });

  return (
    <div
      className={cn(
        "w-full overflow-hidden mt-4 rounded-md sm:mt-0 sm:w-1/2 shadow-[0px_0px_4px_2px_rgba(179,229,252,0.6)] relative flex",
        className
      )}
    >
      <textarea
        placeholder="Search the word"
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => handlePressKey(event)}
        className="outline-none w-full h-11 bg-WhiteBackground dark:bg-DarkBackground border-none p-2 resize-none"
        {...props}
      />
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:cursor-pointer"
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  );
}
