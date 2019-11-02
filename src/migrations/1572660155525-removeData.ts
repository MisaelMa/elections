import {MigrationInterface, QueryRunner} from "typeorm";

export class removeData1572660155525 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `customer` DROP COLUMN `DaTa`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `customer` ADD `DaTa` varchar(250) NOT NULL", undefined);
    }

}
