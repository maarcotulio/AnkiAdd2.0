import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { EnglishService } from "./services/english.service";
import { CreateCardEnglishDto } from "./dto/CreateCardEnglish.dto";
import { CreateListDto } from "./dto/CreateList.dto";

@Controller()
export class DictionaryController {
  constructor(private readonly englishService: EnglishService) {}

  @Get("search/en/:word")
  async getDefs(@Param("word") word: string) {
    return this.englishService.getDefs(word);
  }

  @Post("list/en/")
  @HttpCode(HttpStatus.OK)
  async getListDefs(@Body() bodyRequest: string[]) {
    return this.englishService.getListDefs(bodyRequest);
  }

  @Post("dictionary/en/")
  @HttpCode(HttpStatus.CREATED)
  async addOneWord(@Body() bodyRequest: CreateCardEnglishDto) {
    const { index, word, partOfSpeech } = bodyRequest;
    await this.englishService.addOneWord({
      partOfSpeech,
      index,
      word,
    });
    return null;
  }

  @Post("dictionary/en/list")
  @HttpCode(HttpStatus.CREATED)
  async addListWords(@Body() bodyRequest: CreateListDto) {
    const { list } = bodyRequest;
    const response = await this.englishService.addListWords(list);

    return {
      "Words not found": response,
    };
  }
}
