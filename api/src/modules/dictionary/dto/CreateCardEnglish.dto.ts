import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCardEnglishDto {
  @IsString()
  @IsNotEmpty()
  word: string;

  @IsNumber()
  @IsNotEmpty()
  index: number;

  @IsString()
  @IsNotEmpty()
  partOfSpeech: string;
}
