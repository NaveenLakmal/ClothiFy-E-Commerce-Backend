import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProductTable1685354247125  implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'imageUrl',
                        type: 'varchar',
                    },
                    {
                        name: 'price',
                        type: 'float',
                    },
                    {
                        name: 'soldCount',
                        type: 'int',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'deletedAt',
                        type: 'timestamp',
                        isNullable: true
                    },
                    {
                        name: 'collectionId',
                        type: 'int',
                        isNullable: true,

                    },
                    {
                        name: 'categoryId',
                        type: 'int',

                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'product',
            new TableForeignKey({
                columnNames: ['collectionId'],
                referencedTableName: 'collection',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'product',
            new TableForeignKey({
                columnNames: ['categoryId'],
                referencedTableName: 'category',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product');
    }
}