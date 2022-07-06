import { NextFunction, Request, Response } from 'express';

class BuyerController {
  public buyerService = null;

  public listOfSeller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };

  public sellerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };

  public createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(201).json({});
    } catch (error) {
      next(error);
    }
  };
}

export default BuyerController;
