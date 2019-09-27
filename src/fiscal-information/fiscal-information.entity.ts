import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity('fiscalinformation')
export class FiscalInformationEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  businessName: string; // Razón Social

  @Column('varchar', {
    nullable: false,
    length: 30,
  })
  rfc: string; // RFC

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  regimen: string; // Régimen

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  effectiveDate: string; // *Fecha de vigencia

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  street: string; // *Calle

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  nExterior: string; // *N° Exterior

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  nInterior: string; // *N° Interior

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  cp: string; // *codigo postal

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  colonia: string; // colonia

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  localidad: string; // localidad

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  municipio: string; // minicipio

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  estado: string; // estado

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  country: string; // pais

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  logo: string; // pais

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
