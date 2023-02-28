import { Router } from "express";
import { ListAllRestaurantsController } from "../controllers/find-all-restaurants-controller";

const restaurantRouter = Router();
const restaurantController = new ListAllRestaurantsController()

restaurantRouter.get('/', restaurantController.index);
console.log("2restaurantroutes")
export {restaurantRouter}