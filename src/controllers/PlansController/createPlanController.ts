import prismaCLient from '../../database/prismaCLient';
import { Request, Response } from 'express';

class PlaneController {

	async createPlan(req: Request, res: Response) {
		try {
			const planes = await prismaCLient.plane.create({
				data: {plan_minute:20, plan_name:'FaleMais 30'}
			});
			res.json(planes);    
		} catch (error) {
			res.status(500).json({error:'Server error'});
		}
	}
}

export default new PlaneController();
