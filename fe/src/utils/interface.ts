export class DefinitionProps {
  title: string = "";
  data: SectionProps[];
  className?: string;

  constructor(data: SectionProps[] = []) {
    this.data = data;
  }
}

export class DefsProps {
  definition?: string;
  synonyms?: [];
  antonyms?: [];
  example?: string;
}

export class SectionProps {
  definition?: DefsProps[];
  partOfSpeech?: string;
  word: string = "";
}
