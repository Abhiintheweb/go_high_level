import {MigrationInterface, QueryRunner} from "typeorm";

export class usersMigration1636222195428 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users"(
            "id" bigint(20) NOT NULL AUTO_INCREMENT,
            "name" varchar(255) DEFAULT NULL,
            "date_of_birth" date NOT NULL,
            "is_active" tinyint(1) NOT NULL DEFAULT '1',
            "password" varchar(255) NOT NULL,
            "created_at" datetime DEFAULT NULL,
            "updated_at" datetime DEFAULT NULL,
            PRIMARY KEY ("id")
          ) ENGINE=InnoDB DEFAULT CHARSET=latin1;`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
