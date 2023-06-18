import { Request, Response } from 'express';
import Snack from '../database/schemas/Snack';

class SnackController {
  async create(req: Request, res: Response) {
    const { title, price, image } = req.body;

    try {
      const snack = await Snack.create({
        title,
        price,
        image
      });

      return res.json(snack);
    } catch (error) {
      return res.status(500).json({
        error: 'Registration failed',
        message: error
      });
    }
  }
}

export default new SnackController;
