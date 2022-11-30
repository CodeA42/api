import { ApiProperty } from '@nestjs/swagger'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export default class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'integer',
  })
  @ApiProperty()
  type!: string

  @Column({
    type: 'text',
  })
  @ApiProperty()
  brand!: string

  @Column({
    type: 'text',
  })
  @ApiProperty()
  model!: string

  @Column()
  @ApiProperty()
  constructionYear!: number

  @Column({
    length: 10,
  })
  @ApiProperty()
  fuelType!: string

  @Column({
    type: 'integer',
  })
  @ApiProperty()
  numberOfSeats: number

  @Column({
    type: 'text',
    nullable: true,
  })
  picture: string

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
}
