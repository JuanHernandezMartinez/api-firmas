import { Module } from '@nestjs/common';
import { FirmasModule } from './firmas/firmas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Paciente } from './model/paciente.entity';
import { Firma } from './model/firma.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'radiology2',
      entities: [Firma,Paciente],
    }),
    FirmasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
