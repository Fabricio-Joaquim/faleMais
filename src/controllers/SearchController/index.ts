import { Request, Response } from 'express';
import getPlanController from '../PlansController/getPlanController';
import getOriginDestinController from '../originDestinController/getOriginDestinController';
import { calculateTaxWithPlan } from '../../utils/calculation';
import { IOriginDestin } from '../originDestinController/types';

class SearchController {
	async searchRequest(req: Request, res: Response) {
		try {
			if (!req.query.origin || !req.query.destination) {
				return res.status(400).json({ error: 'Origin and/or destination not found' });
			}
			const {callMinute} = req.query;

			const getPlan = await getPlanController.getPlan(req, res);
			const originDestin 	= await getOriginDestinController.getOriginDestin(req, res) as IOriginDestin;
	
			const calculeWithPlan = calculateTaxWithPlan(Number(callMinute), originDestin?.price, Number(getPlan?.plan_minute));
	
			const response = {...getPlan, ...originDestin, callMinute, ...calculeWithPlan};
			res.json(response);
	
		} catch (error) {
			return res.status(500).json({ error: 'Internal server error' });
		}
	}
}
export default new SearchController();