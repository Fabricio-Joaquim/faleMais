import { Request, Response } from 'express';
import {IOriginDestin } from './types';
import prismaCLient from '../../database/prismaCLient';

class OriginDestinController {
	async getOriginDestin(req: Request, res: Response) {
		try {
			const { origin, destination } = req.query as unknown as IOriginDestin;
			const path = req.path;
			const originDestin = await prismaCLient.originDestin.findFirst(
				{
					where: {
						origin: origin,
						destination: destination
					},
					select: {
						origin: true,
						destination: true,
						price: true
					}
				}
			);
			if (!originDestin) {
				res.status(404).json({ error: 'Origin and/or destination not found' });
			}else{
				//verify if the path is /getOrigin or /getDestin
				if(path ==='/getOrigin')
					return res.json(originDestin);
	
				return (originDestin);
			}
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' });
		}

	}
}

export default new OriginDestinController();