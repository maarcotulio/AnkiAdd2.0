import { IsArray, IsNotEmpty } from "class-validator";

export class CreateListDto {
  @IsNotEmpty()
  @IsArray()
  list: Array<{
    word: string;
    index: number;
    partOfSpeech: string;
  }>;
}
