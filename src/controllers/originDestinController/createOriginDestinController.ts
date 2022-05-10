import prismaCLient from '../../database/prismaCLient';
import { Request, Response } from 'express';
import { IOriginDestin } from './types';

class PlaneController {

	async createOriginDestin(req: Request, res: Response) {
		const {origin, destination, price} = req.body as unknown as IOriginDestin;
		const planes = await prismaCLient.originDestin.create({
			data: {
				destination,
				origin,
				price
			}
		});
		res.json(planes);    
	}
}

export default new PlaneController();