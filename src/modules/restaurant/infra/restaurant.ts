import { getManager } from 'typeorm';
import { IRestaurant } from "../interface/restaurant-entity";
import { IRestaurantRepository } from "../interface/restaurant-repository";

export class RestaurantRepository implements IRestaurantRepository{
    async findAll(): Promise<IRestaurant[]> {
        const entityManager = getManager()
        console.log("Infra/RawQuery")
        const query = await entityManager.query(`SELECT * FROM restaurants`);
        return query;
    }
    async create(data: IRestaurant): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<IRestaurant> {
        throw new Error("Method not implemented.");
    }
    
}