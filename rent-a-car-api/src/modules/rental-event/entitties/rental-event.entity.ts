import { ApiProperty } from '@nestjs/swagger'
import User from 'src/modules/user/entities/user.entity'
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
export default class RentalEvent {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @ApiProperty()
  @OneToOne(() => Vehicle)
  @JoinColumn()
  vehicle!: Vehicle

  @Column({
    type: 'boolean',
    nullable: true,
  })
  @ApiProperty()
  pricePerDay: boolean

  @Column(() => User)
  @JoinColumn()
  @ApiProperty()
  user!: User

  @ApiProperty()
  @Column({
    type: 'timestamp',
  })
  startDateAndTime: Date

  @ApiProperty()
  @Column({
    type: 'timestamp',
  })
  endDateAndTime: Date

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
}
