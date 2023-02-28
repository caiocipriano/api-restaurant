import { IRestaurant } from '@modules/restaurant/interface/restaurant-entity';

export interface IRestaurantRepository{
    create(data:IRestaurant):Promise<void>
    findById(id:string):Promise<IRestaurant>
    findAll():Promise<IRestaurant[]>
    //exists
}