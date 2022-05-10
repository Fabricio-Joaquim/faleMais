import prismaCLient from '../../database/prismaCLient';
import { Request, Response } from 'express';

class getAllPlanController {
	async getAllPlan(req: Request, res: Response) {
		try {
			const plan = await prismaCLient.plane.findMany({
				orderBy: {
					plan_minute:'asc'
				},
				select: {
					plan_minute: true,
					plan_name: true
				}
			});
			if (!plan) {
				res.status(404).json({ error: 'Plans not founds' });
			}
			return res.json(plan);
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' });
		}
	}
}
export default new getAllPlanController();