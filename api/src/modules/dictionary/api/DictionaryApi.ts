import { NotFoundException, ServiceUnavailableException } from "@nestjs/common";
import axios from "axios";
import { wordMock } from "src/mocks/word";

export class DictionaryApi {
  constructor(
    private readonly URL = "https://api.dictionaryapi.dev/api/v2/entries/en/",
  ) {}

  async get(word: string, notFoundWordHandler?: (word: string) => void) {
    return await axios.get<any>(this.URL + word).catch((error) => {
      if (error?.response?.status === 404 && notFoundWordHandler) {
        notFoundWordHandler(word);
        return null;
      }

      if (error?.response?.status === 404) {
        throw new NotFoundException("Word was not found.");
      }

      throw new ServiceUnavailableException("Dictionary is offline");
    });
  }
}
