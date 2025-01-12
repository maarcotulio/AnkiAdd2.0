import { SearchBar } from "../../../components/SearchBar";

export function Home() {
  return (
    <div className="max-w-3xl w-full items-center justify-between mt-20 p-4">
      <SearchBar className="mb-10 sm:w-full" />

      <p className="text-lg mb-4">
        The project is a english dictionary and you can add flashcards with a
        example phrase, if exists, with the to Anki in simple and fast way.
      </p>
      <p className="text-lg">
        Another, important feature is with a list of words provided by the user
        the definitions and examples going to be add to Anki. If you want to try
        it out, click on the "list" button at top of the page.
      </p>
    </div>
  );
}
