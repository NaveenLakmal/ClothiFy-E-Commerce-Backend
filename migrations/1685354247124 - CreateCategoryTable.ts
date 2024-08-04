import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategoryTable1685354247124  implements MigrationInterface{
    public async up(queryRunner:QueryRunner): Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: 'category',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'paraentId',
                        type: 'int',
                        isNullable:true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category');
        
    }
}