import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('firma')
export class Firma {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  firma: number;
}
