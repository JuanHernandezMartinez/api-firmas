import { Module } from '@nestjs/common';
import { FirmasModule } from './firmas/firmas.module';

@Module({
  imports: [FirmasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
