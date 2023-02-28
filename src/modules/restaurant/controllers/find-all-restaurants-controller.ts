import { RestaurantRepository } from './../infra/restaurant';
import { Response } from "express";
import { FindAllRestaurantsService } from "../services/find-all-restaurants-service";

export class ListAllRestaurantsController{
    public async index(response:Response){
            const repo = new RestaurantRepository();
            const listRestaurants = new FindAllRestaurantsService(repo);
            const restaurant = await listRestaurants.execute();
            console.log("3restaurantcontroller")
            return response.status(200).json(restaurant);
    }
}