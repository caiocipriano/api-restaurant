import { restaurantRouter } from "@modules/restaurant/routes/restaurant-routes";
import { Router } from "express";

const routes = Router();

routes.use('/restaurants', restaurantRouter);
console.log("1usingrestaurantroutes")

export {routes};