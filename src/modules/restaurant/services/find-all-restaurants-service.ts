import { RestaurantRepository } from '../infra/restaurant';

export class FindAllRestaurantsService{
    constructor(private restaurantRepository:RestaurantRepository){};
    async execute(){
        const restaurant = await this.restaurantRepository.findAll();
        console.log("4restaurantservice")
        return restaurant;
    }
}