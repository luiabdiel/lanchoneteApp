import { Request, Response, response } from 'express';
import Snack from '../database/schemas/Snack';

class SnackController {
  async find(req: Request, res: Response) {
    try {
      const snacks = await Snack.find();
      return res.json(snacks);
    } catch (error) {
      return res.status(500).json({
        error: 'Something wrong happend, try again'
      });
    }
  }

  async create(req: Request, res: Response) {
    const { title, price, image } = req.body;

    try {
      const snackExists = await Snack.findOne({ title });

      if (snackExists) {
        return res.status(400).json({
          error: 'Ooopss',
          message: 'Snack already exists'
        });
      }

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
