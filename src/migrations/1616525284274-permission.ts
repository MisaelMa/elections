import { MigrationInterface, QueryRunner } from 'typeorm';

export class permission1616525284274 implements MigrationInterface {
  name = 'permission1616525284274';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE `route_action` (`id` int NOT NULL AUTO_INCREMENT, `routeId` int NULL, `actionId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
    await queryRunner.query('CREATE TABLE `permission_actions_action` (`permissionId` int NOT NULL, `actionId` int NOT NULL, INDEX `IDX_579107c19122b9ccc787770dc7` (`permissionId`), INDEX `IDX_ed0e55e485a32756caf0273e93` (`actionId`), PRIMARY KEY (`permissionId`, `actionId`)) ENGINE=InnoDB');
    await queryRunner.query('ALTER TABLE `route_action` ADD CONSTRAINT `FK_2af40dd2596a3da300239f87afe` FOREIGN KEY (`routeId`) REFERENCES `route`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE `route_action` ADD CONSTRAINT `FK_95d4c3d3edbb09b8edd26cebb9f` FOREIGN KEY (`actionId`) REFERENCES `action`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE `permission_actions_action` ADD CONSTRAINT `FK_579107c19122b9ccc787770dc7f` FOREIGN KEY (`permissionId`) REFERENCES `permission`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE `permission_actions_action` ADD CONSTRAINT `FK_ed0e55e485a32756caf0273e936` FOREIGN KEY (`actionId`) REFERENCES `action`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `permission_actions_action` DROP FOREIGN KEY `FK_ed0e55e485a32756caf0273e936`');
    await queryRunner.query('ALTER TABLE `permission_actions_action` DROP FOREIGN KEY `FK_579107c19122b9ccc787770dc7f`');
    await queryRunner.query('ALTER TABLE `route_action` DROP FOREIGN KEY `FK_95d4c3d3edbb09b8edd26cebb9f`');
    await queryRunner.query('ALTER TABLE `route_action` DROP FOREIGN KEY `FK_2af40dd2596a3da300239f87afe`');
    await queryRunner.query('DROP INDEX `IDX_ed0e55e485a32756caf0273e93` ON `permission_actions_action`');
    await queryRunner.query('DROP INDEX `IDX_579107c19122b9ccc787770dc7` ON `permission_actions_action`');
    await queryRunner.query('DROP TABLE `permission_actions_action`');
    await queryRunner.query('DROP TABLE `route_action`');
  }

}
