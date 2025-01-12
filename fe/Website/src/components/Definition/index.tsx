import { Def, DefinitonListAndPartOfSpeech } from "../../@types/Definition";
import { dictionary } from "../../api";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { cn } from "../../utils/cn";

interface DefinitionProps {
  className: string;
  title: string;
  data: DefinitonListAndPartOfSpeech[];
}

export function Definition({ className, title, data }: DefinitionProps) {
  async function addExamplePhrase(
    partOfSpeech: string,
    index: number,
    title: string
  ) {
    await dictionary.addFlashcard({
      word: title,
      index,
      partOfSpeech,
    });
  }

  console.log(data);

  return (
    <div className={cn(className)}>
      <div className="font-libreBaskerville w-full max-w-3xl text-left text-[108px]">
        {capitalizeFirstLetter(title)}
      </div>
      <div className="mt-8">
        {data.map((section) => (
          <div
            key={section?.partOfSpeech}
            className="flex flex-col gap-2 max-w-3xl text-left mb-8"
          >
            <span className="text-lg text-cyan-400 mt-12">
              {capitalizeFirstLetter(section?.partOfSpeech)}
            </span>

            {section.definition?.map((defs: Def, index: number) => (
              <div key={index}>
                <p className="w-full text-3xl text-bold">
                  {index + 1}. {defs?.definition}
                </p>
                {defs.example && (
                  <div className="mt-4 mb-4">
                    <span className="text-gray-400 font-bold">
                      Example phrase:
                    </span>
                    <p
                      className="hover:text-gray-500 transition-all hover:cursor-pointer"
                      onClick={() =>
                        addExamplePhrase(section.partOfSpeech, index, title)
                      }
                    >
                      {defs.example}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
