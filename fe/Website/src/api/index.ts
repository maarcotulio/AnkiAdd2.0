import axios from "axios";
import { toast } from "react-toastify";

interface addFlashcardProps {
  word: string;
  index: number;
  partOfSpeech: string;
}

class Dictionary {
  constructor(private baseURL: string = "http://localhost:3000") {}

  async getMeaning(word: string) {
    try {
      const response = await axios.get(`${this.baseURL}/search/en/${word}`);

      return response.data;
    } catch {
      toast.error("Error to connect in the dictionary");
      return null;
    }
  }

  async listDefs(words: string[]) {
    try {
      const response = await axios.post(`${this.baseURL}/list/en/`, words);

      return response.data;
    } catch {
      toast.error("Error to connect in the dictionary");
      return null;
    }
  }

  async addFlashcard({ word, index, partOfSpeech }: addFlashcardProps) {
    await axios
      .post(`${this.baseURL}/dictionary/en/`, {
        word,
        index,
        partOfSpeech,
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.message || "Error to add a flashcard"
        );
      });
  }
}

export const dictionary = new Dictionary();
