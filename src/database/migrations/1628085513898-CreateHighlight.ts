import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateHighlight1628085513898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({

                name: "highlights",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_highlights",
                        type: "uuid"
                    },
                    {
                        name: "highlights",
                        type: "varchar"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },

                ],
                
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_highlights"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]

            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("highlights")
    }

}
