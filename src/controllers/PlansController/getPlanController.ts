import { Request, Response } from 'express';
import prismaCLient from '../../database/prismaCLient';
import { IPlan } from './types';
class getPlanController {
	async getPlan(req: Request, res: Response) {
		try {    
			const {plan} = req.query as unknown as IPlan;
			const plane = await prismaCLient.plane.findUnique({
				where: {
					plan_name: plan
				},
				select: {
					plan_minute: true,
					plan_name: true,
				}
			});
			if(!plane){
				res.status(404).json({error:'Plan not found'});
			}else{
				return (plane);
			}
		} catch (error) {
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}

export default new getPlanController();
