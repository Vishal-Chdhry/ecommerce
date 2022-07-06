import { NextFunction, Request, Response } from 'express';

class SellerController {
  public sellerService = null;

  public getOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };

  public createCatalog = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(201).json({});
    } catch (error) {
      next(error);
    }
  };
}

export default SellerController;
