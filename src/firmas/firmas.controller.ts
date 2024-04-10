import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FirmasService } from './firmas.service';

@Controller('firmas')
export class FirmasController {
  constructor(private firmaService:FirmasService){}
  @Get()
  ping() {
    console.log('ping');
    return { texto: 'ping' };
  }
  @Post('save')
  guardarFirma(@Body() body: { data: string }) {
    this.firmaService.guardarFirma(body.data)
    return { message: 'firma recibida' };
  }
}
