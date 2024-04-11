import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Firma } from './firma.entity';

@Entity('pacientes')
export class Paciente {
  @PrimaryGeneratedColumn()
  id_p: number;
  @Column()
  curp_p: string;
  @Column()
  nombre_p: string;
  @Column()
  apaterno_p: string;
  @Column()
  amaterno_p: string;
  @Column()
  tCelular_p: string;
  @Column()
  email_p: string;
  @Column()
  sexo_p: number;
  @Column()
  fNac_p: string;
  @Column()
  fechaR_p: string;
  @OneToOne(() => Firma)
  @JoinColumn({ name: "id_firma" })
   id_firma:Firma;
}

