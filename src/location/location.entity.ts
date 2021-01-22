import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MunicipalityEntity } from '../municipality/municipality.entity';
import { SectionEntity } from '../section/section.entity';
import { CustomerEntity } from '../customer/customer.entity';

@Entity('location')
export class LocationEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abrev: string;

  @Column()
  name: string;

  @ManyToOne(type => MunicipalityEntity, municipality => municipality.locations, {
    cascade: ['insert'],
  })
  muncipality: MunicipalityEntity;

  @OneToMany(type => SectionEntity, section => section.location, {
    cascade: ['insert'],
  })
  sections: SectionEntity[];

  @Column('date', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('date', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(type => CustomerEntity, people => people.zona, {
    cascade: ['insert'],
  })
  people: CustomerEntity[];
}
