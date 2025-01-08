import axios from "axios";
import { BadRequestException } from "@nestjs/common";

import { config } from "config/global_variables";

function createFlashcard(front: string, back: string) {
  return JSON.stringify({
    action: "addNote",
    version: 6,
    params: {
      note: {
        deckName: config.DECK_NAME,
        modelName: "Basic",
        fields: {
          Front: front,
          Back: back,
        },
        tags: [],
      },
    },
  });
}

interface formatCardAddToAnkiProps {
  definitions: any;
  word: string;
  index: number;
}

export async function formatCardAddToAnki({
  definitions,
  word,
  index,
}: formatCardAddToAnkiProps) {
  const { example, formatedDefs } = formatDefinitions(definitions, index, word);

  const flashcard = createFlashcard(example, formatedDefs);

  await axios
    .post(config.ANKICONNECT_URL, flashcard, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch(() => {
      throw new BadRequestException("Error trying to connect in Anki");
    });
}

function formatDefinitions(data: any, index: number, word: string) {
  let example = null;
  let dataFormated = null;

  if (typeof index === "number") {
    const definitionAndExampleObject = data[0]?.definition[index];
    example = definitionAndExampleObject?.example;
    dataFormated = `
    <span style="text-align: left">
      <strong>${data[0]?.partOfSpeech}:</strong>
      <br>
      <ol>
        ${definitionAndExampleObject?.definition}
      </ol>
    </span>
    `;
  } else {
    dataFormated = data
      .map((oneSectionOfDefinitons: any) => {
        const sectionDefinitions = [];
        oneSectionOfDefinitons.definition.map((def: any) => {
          if (!example && def.example) {
            example = def.example;
          }

          return sectionDefinitions.push(def.definition);
        });

        // .join is necessary to avoid commas in the list
        const DefsArrayFormatedToHtml = sectionDefinitions
          .map((def: string) => `<li>${def}</li>`)
          .join("");

        return `
    <span style="text-align: left">
      <strong>${oneSectionOfDefinitons.partOfSpeech}:</strong>
      <br>
      <ol>
        ${DefsArrayFormatedToHtml}
      </ol>
    </span>
    `;
      })
      .join("<br>");
  }
  if (example) {
    example = `
          <h1>${example}</h1>
          The meaning of ${word}
        `;
  }
  return {
    formatedDefs: dataFormated,
    example: example || word,
  };
}
