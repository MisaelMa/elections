import {MigrationInterface, QueryRunner} from "typeorm";

export class create1611957719492 implements MigrationInterface {
    name = 'create1611957719492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `customer` ADD `facebook` varchar(60) NULL");
        await queryRunner.query("ALTER TABLE `customer` ADD `instagram` varchar(60) NULL");
        await queryRunner.query("ALTER TABLE `customer` ADD `twitter` varchar(60) NULL");
        await queryRunner.query("ALTER TABLE `customer` ADD `email` varchar(60) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `customer` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `customer` DROP COLUMN `twitter`");
        await queryRunner.query("ALTER TABLE `customer` DROP COLUMN `instagram`");
        await queryRunner.query("ALTER TABLE `customer` DROP COLUMN `facebook`");
    }

}
