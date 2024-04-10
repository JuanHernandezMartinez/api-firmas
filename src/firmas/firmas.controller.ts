import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { FirmasService } from './firmas.service';

@Controller('firmas')
export class FirmasController {
  constructor(private firmaService: FirmasService) {}

  @Post('save')
  async guardarFirma(@Body() body: { data: string }): Promise<any> {
    const guardando = await this.firmaService.guardarFirma(body.data);
    if(!guardando){
      throw new HttpException('Error', HttpStatus.BAD_REQUEST);
    }
    return {respuesta:"Firma guardada"};
  }
}
