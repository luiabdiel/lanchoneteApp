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

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const snack = await Snack.findById(id);

      if (!snack) {
        return res.send(404).json({
          error: 'Oops',
          message: 'Snack not found'
        })
      }

      return res.json(snack);
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

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await Snack.findByIdAndDelete(id);

      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({
        error: 'Failed to delete snack',
        message: error
      });
    }
  }
}

export default new SnackController;
