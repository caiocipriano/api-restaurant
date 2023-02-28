import { RestaurantRepository } from './../infra/restaurant';
import { NextFunction, Request, Response } from "express";
import { FindAllRestaurantsService } from "../services/find-all-restaurants-service";

export class ListAllRestaurantsController{
    public async index(request:Request,response:Response){
            const repo = new RestaurantRepository();
            const listRestaurants = new FindAllRestaurantsService(repo);
            const restaurant = await listRestaurants.execute();
            console.log("3restaurantcontroller")
            return response.status(200).json(restaurant);
    }
}