import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createWriteStream } from 'fs';
import { Firma } from 'src/model/firma.entity';
import { Paciente } from 'src/model/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FirmasService {
  constructor(
    @InjectRepository(Firma)
    private firmaRepository: Repository<Firma>,
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  async guardarFirma(id_p: number, base64Data: string): Promise<string> {
    const base64Image = base64Data.replace(/^data:image\/png;base64,/, '');
    // const firma = new Firma();
    // firma.firma = path;
    const pacienteEncontrado = await this.pacienteRepository
      .createQueryBuilder('paciente')
      .leftJoinAndSelect('paciente.id_firma', 'firma')
      .where('paciente.id_p = :id', { id: id_p })
      .getOne();
    console.log(pacienteEncontrado);
    if (
      !pacienteEncontrado ||
      (pacienteEncontrado.id_firma &&
        pacienteEncontrado.id_firma.id &&
        pacienteEncontrado.id_firma.id !== 1)
    ) {
      console.log('Ya existe una firma o no se encontro el paciente');
      return;
    }
    const filename = `${pacienteEncontrado.nombre_p}${pacienteEncontrado.apaterno_p}${pacienteEncontrado.apaterno_p}.png`;
    const path = `\\firmas-guardadas\\${filename}`;
    const guardarFirma = path;

    return new Promise((resolve, reject) => {
      const writeStream = createWriteStream(guardarFirma, {
        encoding: 'base64',
      });
      writeStream.write(base64Image, 'base64');
      writeStream.end();
      writeStream.on('finish', async () => {
        const firma = this.firmaRepository.create({ firma: path });
        const firmaGuardada = await this.firmaRepository.save(firma);
        pacienteEncontrado.id_firma = firmaGuardada;
        this.pacienteRepository.save(pacienteEncontrado);
        resolve(filename);
      });
      writeStream.on('error', (error) => reject(error));
    });
  }

  // guardarFirmaPDF(base64Data: string): Promise<string> {
  //   const base64Image = base64Data.replace(/^data:image\/png;base64,/, '');
  //   const filename = `signature_${Date.now()}.pdf`;
  //   const path = `./signatures/${filename}`;

  //   const doc = new PDFDocument();
  //   const stream = fs.createWriteStream(path);

  //   doc.pipe(stream);
  //   doc.image(Buffer.from(base64Image, 'base64'), 100, 100); // Agrega la imagen a tu PDF
  //   doc.end();

  //   return new Promise((resolve, reject) => {
  //     stream.on('finish', () => resolve(filename));
  //     stream.on('error', (error) => reject(error));
  //   });
  // }
}
