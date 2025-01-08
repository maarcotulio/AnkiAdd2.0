import { Injectable } from "@nestjs/common";

import { formatCardAddToAnki } from "src/config/englishTemplate";
import { DictionaryApi } from "../api/DictionaryApi";
import { CreateCardEnglishDto } from "../dto/CreateCardEnglish.dto";

@Injectable()
export class EnglishService {
  constructor(private readonly dictionaryApi: DictionaryApi) {}

  async getDefs(word: string) {
    const response = await this.dictionaryApi.get(word);
    return this.findDefinitions(response.data, "all");
  }

  async getListDefs(word: string[]) {
    const response = word.map(async (word) => {
      const response = await this.dictionaryApi.get(word);
      return this.findDefinitions(response.data, "all", word);
    });
    const data = await Promise.all(response);

    return data;
  }

  async addOneWord({ partOfSpeech, index, word }: CreateCardEnglishDto) {
    const response = await this.dictionaryApi.get(word);
    if (!response) {
      return null;
    }

    await this.findDefsFormatAddToAnki(
      response.data,
      partOfSpeech,
      word,
      index,
    );

    return null;
  }

  async addListWords(list: any) {
    const notFoundWords = [];
    function handleNotFoundWords(word: string) {
      notFoundWords.push(word);
    }

    // Process in batches of 5
    for (let i = 0; i < list.length; i += 5) {
      const batch = list.slice(i, i + 5);
      const batchPromises = batch.map(async (sectionWord: any) => {
        const response = await this.dictionaryApi.get(
          sectionWord.word,
          handleNotFoundWords,
        );
        if (response) {
          await this.findDefsFormatAddToAnki(
            response.data,
            sectionWord.partOfSpeech,
            sectionWord.word,
            sectionWord.index,
          );
        }
      });
      await Promise.all(batchPromises);
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
    }

    return notFoundWords;
  }

  private async findDefsFormatAddToAnki(
    data: any,
    partOfSpeech: string,
    word: string,
    index: number,
  ) {
    const newIndex = partOfSpeech === "all" ? null : index;

    const definitions = await this.findDefinitions(data, partOfSpeech);
    await formatCardAddToAnki({
      definitions,
      word,
      index: newIndex,
    });
  }

  private async findDefinitions(
    data: any,
    partOfSpeech: string,
    word?: string,
  ) {
    const wordEntry = data[0];

    const definitions = [];

    if (partOfSpeech === "all") {
      for (const meaning of wordEntry.meanings) {
        definitions.push({
          definition: meaning.definitions,
          partOfSpeech: meaning.partOfSpeech,
          word,
        });
      }
    } else {
      for (const meaning of wordEntry.meanings) {
        if (meaning.partOfSpeech === partOfSpeech) {
          definitions.push({
            definition: meaning.definitions,
            partOfSpeech: meaning.partOfSpeech,
            word,
          });

          break;
        }
      }
    }

    return definitions;
  }
}
