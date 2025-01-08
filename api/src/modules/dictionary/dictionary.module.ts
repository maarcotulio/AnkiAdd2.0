import { Module } from "@nestjs/common";
import { EnglishService } from "./services/english.service";
import { DictionaryController } from "./dictionary.controller";
import { DictionaryApi } from "./api/DictionaryApi";

@Module({
  controllers: [DictionaryController],
  providers: [EnglishService, DictionaryApi],
})
export class DictionaryModule {}
