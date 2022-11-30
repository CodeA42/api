import { MigrationInterface, QueryRunner } from 'typeorm'

export class vehicle1669791758671 implements MigrationInterface {
  name = 'vehicle1669791758671'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" integer NOT NULL, "brand" text NOT NULL, "model" text NOT NULL, "constructionYear" integer NOT NULL, "fuelType" character varying(10) NOT NULL, "numberOfSeats" integer NOT NULL, "picture" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "vehicle"`)
  }
}
