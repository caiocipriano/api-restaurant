import { getManager, MigrationInterface, QueryRunner} from "typeorm";

export class CreateRestaurantTable1676383543676 implements MigrationInterface {

    
    public async up(queryRunner: QueryRunner): Promise<void> {
        const entityManager = getManager();

        await entityManager.query(`CREATE TABLE restaurants(
                                    id INT PRIMARY KEY, 
                                    name VARCHAR(225) NOT NULL,
                                    openning_hours TIMESTAMP
                                  )`
                                );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const entityManager = getManager();
        await entityManager.query(`DROP TABLE restaurants`);
    }

}
