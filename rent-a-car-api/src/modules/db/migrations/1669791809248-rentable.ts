import { MigrationInterface, QueryRunner } from 'typeorm'

export class rentable1669791809248 implements MigrationInterface {
  name = 'rentable1669791809248'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "rentable" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "pricePerDay" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vehicleId" uuid, CONSTRAINT "REL_dfdfefaa53d0153044ec6b955c" UNIQUE ("vehicleId"), CONSTRAINT "PK_ae7306d6fc18b1eb136ad3cd9a0" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "rentable" ADD CONSTRAINT "FK_dfdfefaa53d0153044ec6b955c1" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "rentable" DROP CONSTRAINT "FK_dfdfefaa53d0153044ec6b955c1"`,
    )
    await queryRunner.query(`DROP TABLE "rentable"`)
  }
}
