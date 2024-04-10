import { Module } from '@nestjs/common';
import { FirmasService } from './firmas.service';
import { FirmasController } from './firmas.controller';

@Module({
  providers: [FirmasService],
  controllers: [FirmasController]
})
export class FirmasModule {}
