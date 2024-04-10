import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class FirmasService {
  guardarFirma(base64Data: string): Promise<string> {
    const base64Image = base64Data.replace(/^data:image\/png;base64,/, '');
    const filename = `signature_${Date.now()}.png`;
    const path = `./signatures/${filename}`;
    return new Promise((resolve, reject) => {
      const writeStream = createWriteStream(path, { encoding: 'base64' });
      writeStream.write(base64Image, 'base64');
      writeStream.end();
      writeStream.on('finish', () => resolve(filename));
      writeStream.on('error', (error) => reject(error));
    });
  }
}
