import { Request, Response } from 'express';
import CarService from './CarService';

export const create = async (req: Request, res: Response) => {
    const response = await CarService.create(req.body);
    return res.json(response);
  };

  export const list = async (_: Request, res: Response) => {
    const response = await CarService.findAll();
    return res.json(response);
  };