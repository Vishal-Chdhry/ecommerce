import { Routes } from '@/interfaces/routes.interface';
import authMiddleware from '@/middlewares/auth.middleware';
import { Router } from 'express';

class BuyerRoute implements Routes {
  public path = '/buyer';
  public router = Router();
  public buyerController = null;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/list-of-sellers`, authMiddleware, null);
    this.router.get(`${this.path}/seller-catalog/:seller_id(\\d+)`, authMiddleware, null);
    this.router.post(`${this.path}/create-order/:seller_id(\\d+`, authMiddleware, null);
  }
}

export default BuyerRoute;
