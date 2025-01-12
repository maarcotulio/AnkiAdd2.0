export interface DefinitonListAndPartOfSpeech {
  word: string;
  partOfSpeech: string;
  definition: Def[];
}

export interface Def {
  definition: string;
  synonyms?: [];
  antonyms?: [];
  example?: string;
}
