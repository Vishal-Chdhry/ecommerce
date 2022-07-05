import { Routes } from '@/interfaces/routes.interface';
import authMiddleware from '@/middlewares/auth.middleware';
import { Router } from 'express';

class SellerRoute implements Routes {
  public path = '/seller';
  public router = Router();
  public sellerController = null;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/create-catalog`, authMiddleware, null);
    this.router.get(`${this.path}/orders`, authMiddleware, null);
  }
}

export default SellerRoute;
