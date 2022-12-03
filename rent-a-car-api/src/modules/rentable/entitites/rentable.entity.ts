import { ApiProperty } from '@nestjs/swagger'
import Vehicle from 'src/modules/vehicle/entities/vehicle.entiity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export default class Rentable {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ApiProperty()
  @ManyToOne(() => Vehicle)
  @JoinColumn()
  vehicle!: Vehicle

  @Column({
    type: 'decimal',
  })
  @ApiProperty()
  pricePerDay!: number

  @Column({
    type: 'boolean',
    default: false,
  })
  @ApiProperty()
  active!: boolean

  @Column({
    type: 'timestamp',
  })
  @ApiProperty()
  lastActivatedAt: Date

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  @ApiProperty()
  rentedAt: Date

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
}
