import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'pets'})
export class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name:'name', type:'varchar', comment:'', length:'40' })
  name: string;

  @Column({ name:'breed', type:'varchar', comment:'', length: 255, nullable: true })
  breed: string;

  @Column({ name:'color', type:'varchar', comment:'', length: 255, nullable: true })
  color: string;

  @Column({ name:'ishealthy', type:'boolean', comment:'', default: false })
  isHealthy: boolean;

  @Column({ name:'weight', type: 'integer', nullable: true })
  weight: number;
}
