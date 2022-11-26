import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 24,
    unique: true,
  })
  username: string;

  @Column({
    type: 'text',
  })
  password: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column({
    type: 'text',
  })
  phoneNumber!: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  logout: string;

  @Column({
    type: 'text',
  })
  firstName!: string;

  @Column({
    type: 'text',
  })
  lastName!: string;

  @Column({
    length: 10,
  })
  accountType: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  rentedVehicles: string;
}
