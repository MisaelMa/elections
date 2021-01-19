import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { MunicipalityEntity } from '../municipality/municipality.entity';
import { SectionEntity } from '../section/section.entity';

@Entity('location')
export class LocationEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abrev: string;

  @Column()
  name: string;

  @ManyToOne(type => MunicipalityEntity, municipality => municipality.locations)
  id_muncipality: MunicipalityEntity;

  @OneToMany(type => SectionEntity, section => section.id_location)
  sections: Promise<SectionEntity[]>;

  @Column('date', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('date', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
