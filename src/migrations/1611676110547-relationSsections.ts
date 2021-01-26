import { MigrationInterface, QueryRunner } from 'typeorm';

export class relationSsections1611676110547 implements MigrationInterface {
  name = 'relationSsections1611676110547';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `section` ADD `stateId` int NULL');
    await queryRunner.query('ALTER TABLE `section` ADD `municipalityId` int NULL');
    await queryRunner.query('ALTER TABLE `section` ADD CONSTRAINT `FK_7338b6c95ef26838d30cf75ed46` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE `section` ADD CONSTRAINT `FK_3de8df35689fdc37929c424552e` FOREIGN KEY (`municipalityId`) REFERENCES `municipality`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `section` DROP FOREIGN KEY `FK_3de8df35689fdc37929c424552e`');
    await queryRunner.query('ALTER TABLE `section` DROP FOREIGN KEY `FK_7338b6c95ef26838d30cf75ed46`');
    await queryRunner.query('ALTER TABLE `section` DROP COLUMN `municipalityId`');
    await queryRunner.query('ALTER TABLE `section` DROP COLUMN `stateId`');
  }

}
