import prismaCLient from '../../database/prismaCLient';
import { Request, Response } from 'express';

class getDestinByOriginController {
	async getDestinByOrigin(req: Request, res: Response) {
        
		try {
			const { origin: requestOrigin } = req.query;
			const origin = await prismaCLient.originDestin.groupBy({by: ['destination'], where: {
				origin: requestOrigin?.toString()
			}});
			if (!origin) {
				res.status(404).json({ error: 'Origin and/or destination not found' });
			}
			return res.json(origin);
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' });
		}
	}
}

export default new getDestinByOriginController();
