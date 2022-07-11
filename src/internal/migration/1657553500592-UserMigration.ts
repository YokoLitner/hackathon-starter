import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1657553500592 implements MigrationInterface {
  name = 'UserMigration1657553500592';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "permission" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_3b8b97af9d9d8807e41e6f48362" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "role_permissions_permission" ("role_id" integer NOT NULL, "permission_id" integer NOT NULL, CONSTRAINT "PK_32d63c82505b0b1d565761ae201" PRIMARY KEY ("role_id", "permission_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0167acb6e0ccfcf0c6c140cec4" ON "role_permissions_permission" ("role_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2d3e8e7c82bdee8553b6f1e332" ON "role_permissions_permission" ("permission_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_roles_role" ("user_id" integer NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "PK_cbb8cdf197992a93da55155c14e" PRIMARY KEY ("user_id", "role_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_09d115a69b6014d324d592f9c4" ON "user_roles_role" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0e2f5483d5e8d52043f9763453" ON "user_roles_role" ("role_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "role_permissions_permission" ADD CONSTRAINT "FK_0167acb6e0ccfcf0c6c140cec4a" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "role_permissions_permission" ADD CONSTRAINT "FK_2d3e8e7c82bdee8553b6f1e3325" FOREIGN KEY ("permission_id") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_09d115a69b6014d324d592f9c42" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_0e2f5483d5e8d52043f97634538" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_0e2f5483d5e8d52043f97634538"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_09d115a69b6014d324d592f9c42"`,
    );
    await queryRunner.query(
      `ALTER TABLE "role_permissions_permission" DROP CONSTRAINT "FK_2d3e8e7c82bdee8553b6f1e3325"`,
    );
    await queryRunner.query(
      `ALTER TABLE "role_permissions_permission" DROP CONSTRAINT "FK_0167acb6e0ccfcf0c6c140cec4a"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_0e2f5483d5e8d52043f9763453"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_09d115a69b6014d324d592f9c4"`,
    );
    await queryRunner.query(`DROP TABLE "user_roles_role"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2d3e8e7c82bdee8553b6f1e332"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_0167acb6e0ccfcf0c6c140cec4"`,
    );
    await queryRunner.query(`DROP TABLE "role_permissions_permission"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "role"`);
    await queryRunner.query(`DROP TABLE "permission"`);
  }
}
