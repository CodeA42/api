import { MigrationInterface, QueryRunner } from 'typeorm'

export class updateRentable1670088403802 implements MigrationInterface {
  name = 'updateRentable1670088403802'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rentable" ADD "active" boolean NOT NULL DEFAULT false`,
    )
    await queryRunner.query(
      `ALTER TABLE "rentable" ADD "lastActivatedAt" TIMESTAMP NOT NULL`,
    )
    await queryRunner.query(`ALTER TABLE "rentable" ADD "rentedAt" TIMESTAMP`)
    await queryRunner.query(
      `ALTER TABLE "rentable" DROP CONSTRAINT "FK_dfdfefaa53d0153044ec6b955c1"`,
    )
    await queryRunner.query(`ALTER TABLE "rentable" DROP COLUMN "pricePerDay"`)
    await queryRunner.query(
      `ALTER TABLE "rentable" ADD "pricePerDay" numeric NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "rentable" DROP CONSTRAINT "REL_dfdfefaa53d0153044ec6b955c"`,
    )
    await queryRunner.query(
      `ALTER TABLE "rentable" ADD CONSTRAINT "FK_dfdfefaa53d0153044ec6b955c1" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rentable" DROP CONSTRAINT "FK_dfdfefaa53d0153044ec6b955c1"`,
    )
    await queryRunner.query(
      `ALTER TABLE "rentable" ADD CONSTRAINT "REL_dfdfefaa53d0153044ec6b955c" UNIQUE ("vehicleId")`,
    )
    await queryRunner.query(`ALTER TABLE "rentable" DROP COLUMN "pricePerDay"`)
    await queryRunner.query(
      `ALTER TABLE "rentable" ADD "pricePerDay" boolean NOT NULL`,
    )
    await queryRunner.query(
      `ALTER TABLE "rentable" ADD CONSTRAINT "FK_dfdfefaa53d0153044ec6b955c1" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(`ALTER TABLE "rentable" DROP COLUMN "rentedAt"`)
    await queryRunner.query(
      `ALTER TABLE "rentable" DROP COLUMN "lastActivatedAt"`,
    )
    await queryRunner.query(`ALTER TABLE "rentable" DROP COLUMN "active"`)
  }
}
