import {MigrationInterface, QueryRunner} from "typeorm";

export class realctionspeople1611676560850 implements MigrationInterface {
    name = 'realctionspeople1611676560850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `customer` ADD `stateId` int NULL");
        await queryRunner.query("ALTER TABLE `customer` ADD `municipalityId` int NULL");
        await queryRunner.query("ALTER TABLE `customer` ADD CONSTRAINT `FK_1691bdfb47fb7d7c93e3ec6822d` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `customer` ADD CONSTRAINT `FK_6b2e80dd5037bb6986641c68e87` FOREIGN KEY (`municipalityId`) REFERENCES `municipality`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `customer` DROP FOREIGN KEY `FK_6b2e80dd5037bb6986641c68e87`");
        await queryRunner.query("ALTER TABLE `customer` DROP FOREIGN KEY `FK_1691bdfb47fb7d7c93e3ec6822d`");
        await queryRunner.query("ALTER TABLE `customer` DROP COLUMN `municipalityId`");
        await queryRunner.query("ALTER TABLE `customer` DROP COLUMN `stateId`");
    }

}
