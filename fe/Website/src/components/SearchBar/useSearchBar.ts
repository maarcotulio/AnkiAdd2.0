import { useState } from "react";

interface useSearchBarProps {
  onListWords(data: string[]): void;
}

export function useSearchBar({ onListWords }: useSearchBarProps) {
  const [value, setValue] = useState("");

  function handleSearch() {
    const words = value.split("\n").filter(Boolean);

    if (words.length < 1) {
      return null;
    }

    onListWords(words);
  }

  function handlePressKey(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSearch();
    }
  }

  return {
    handlePressKey,
    handleSearch,
    setValue,
  };
}
