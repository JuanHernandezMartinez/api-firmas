import { Module } from '@nestjs/common';
import { FirmasService } from './firmas.service';
import { FirmasController } from './firmas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Firma } from 'src/model/firma.entity';
import { Paciente } from 'src/model/paciente.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Firma,Paciente])],
  providers: [FirmasService],
  controllers: [FirmasController]
})
export class FirmasModule {}
