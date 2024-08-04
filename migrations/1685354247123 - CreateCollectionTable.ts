import { promises } from "dns";
import { MigrationInterface, QueryRunner, Table,  } from "typeorm";

export class CreateCollectionTable1685354247123 implements MigrationInterface{
    public async up(queryRunner:QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: 'collection',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                ],
            }),
            true,
        );


    }

    public async down(queryRunner:QueryRunner): Promise<void>{
        await queryRunner.dropTable('collection');
    }

}