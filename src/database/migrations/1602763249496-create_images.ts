import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { Query } from "typeorm/driver/Query";

export class createImages1602763249496 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZA ALTERAÇÕES
    // CRIA TABELA, CRIA UM NOVO CAMPO, DELETA ALGUM CAMPO
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO UP
    await queryRunner.dropTable('images');
  }
}
