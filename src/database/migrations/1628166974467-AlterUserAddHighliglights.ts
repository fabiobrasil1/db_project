import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddHighliglights1628166974467 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "highlight",
                type: "boolean",
                isNullable: false,
                default: false
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "highlight")
    }

}
