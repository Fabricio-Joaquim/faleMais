import prismaCLient from '../../database/prismaCLient';
import { Request, Response } from 'express';
import { IOriginDestin } from './types';

class createOriginDestinController {
	async createOriginDestin(req: Request, res: Response) {
		try {
			const { origin, destination, price } = req.body;
			const originDestin: IOriginDestin = {
				origin,
				destination,
				price
			};
			const createOriginDestin = await prismaCLient.originDestin.create({
				data: originDestin
			});
			if (!createOriginDestin) {
				res.status(404).json({ error: 'Origin and/or destination not found' });
			
			}
			return res.json(origin);
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' });
		}
	}
}

export default new createOriginDestinController();
