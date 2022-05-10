import { Response, Request } from 'express';
import { Router } from 'express';
import  SearchController  from './controllers/SearchController';
import OriginDestin from './controllers/originDestinController/';
import PlansController from './controllers/PlansController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('Hello World! :)');
}
);
router.get('/search', SearchController.searchRequest);

router.get('/getAllPlan',PlansController.getAllPlanController.getAllPlan);

router.get('/getOrigin', OriginDestin.getOriginDestinController.getOriginDestin);
router.get('/getAllOrigin', OriginDestin.getAllOriginController.getAllOrigin);
router.get('/getDestinByOrigin',OriginDestin.getDestinByOriginController.getDestinByOrigin);

router.post('/createOrigin',OriginDestin.createOriginDestinController.createOriginDestin);

export default router;