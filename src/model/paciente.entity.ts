import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pacientes')
export class Paciente {
  @PrimaryGeneratedColumn()
  id_p: number;
  @Column()
  curp: string;
  @Column()
  nombre: string;
  @Column()
  apellidoPaterno: string;
  @Column()
  apellidoMaterno: string;
  @Column()
  telefono: string;
  @Column()
  email: string;
  @Column()
  sexo: number;
  @Column()
  fechaNacimiento: string;
  @Column()
  activo: boolean;
  @Column()
  fechaRegistro: string;
  @Column()
  nombreCompleto: string;
  @OneToOne('')
  firmaId: number;
}
