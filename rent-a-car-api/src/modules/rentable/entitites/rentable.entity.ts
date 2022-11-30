import { ApiProperty } from '@nestjs/swagger'
import Vehicle from 'src/modules/vehicle/entities/vehicle.entiity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export default class Rentable {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ApiProperty()
  @OneToOne(() => Vehicle)
  @JoinColumn()
  vehicle!: Vehicle

  @Column({
    type: 'boolean',
  })
  @ApiProperty()
  pricePerDay!: boolean

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
}
