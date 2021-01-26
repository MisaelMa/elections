import { MigrationInterface, QueryRunner } from 'typeorm';

export class createrealtions1611672433655 implements MigrationInterface {
  name = 'createrealtions1611672433655';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `location` ADD `stateId` int NULL');
    await queryRunner.query('ALTER TABLE `location` ADD CONSTRAINT `FK_98f8f737401262fdb7c7c32cbf8` FOREIGN KEY (`stateId`) REFERENCES `state`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `location` DROP FOREIGN KEY `FK_98f8f737401262fdb7c7c32cbf8`');
    await queryRunner.query('ALTER TABLE `location` DROP COLUMN `stateId`');
  }

}
