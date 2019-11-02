import {MigrationInterface, QueryRunner} from "typeorm";

export class amir1572660074989 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `customer` ADD `DaTa` varchar(250) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `customer` DROP COLUMN `DaTa`", undefined);
    }

}
