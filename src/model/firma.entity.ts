import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('firma')
export class Firma {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firma: string;
}
