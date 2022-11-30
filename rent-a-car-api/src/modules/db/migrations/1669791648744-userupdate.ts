import { MigrationInterface, QueryRunner } from 'typeorm'

export class userupdate1669791648744 implements MigrationInterface {
  name = 'userupdate1669791648744'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "firstName" text NOT NULL`)
    await queryRunner.query(`ALTER TABLE "user" ADD "lastName" text NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "user" ADD "role" character varying(10) NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "user" ADD "rentedVehicles" text`)
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "phoneNumber" SET NOT NULL`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "phoneNumber" DROP NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "rentedVehicles"`)
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`)
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`)
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`)
  }
}
