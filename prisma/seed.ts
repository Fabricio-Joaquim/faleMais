import {plans, originDestin} from './customSeed';
import PrismaClient from '../src/database/prismaCLient';

async function seed (){
	
	await PrismaClient.plane.createMany({data:plans});
	await PrismaClient.originDestin.createMany({data:originDestin});
}

seed()
	.catch(e => {
		console.log(e);
	}
	).finally(()=>{
		PrismaClient.$disconnect();
		console.log('seed done');
	});
