interface ICalculateTax {
    withPlan: number | string;
    withoutPlan: string | number;
}
// Calculate the tax for the call minutes in 10 percent of the price
const PERCENT_EXCEDENT = 0.1;

function calculateTaxWithPlan(callMinute:number, price:number, minutePlan:number) {
	let calculateWithPlan = 0;
	const objectReturn = {} as ICalculateTax;
	if (callMinute > minutePlan) {
		const excedentMinute = (callMinute - minutePlan);
		const tax = (price * PERCENT_EXCEDENT) + price;
		calculateWithPlan = excedentMinute * tax;
		objectReturn.withPlan = calculateWithPlan;
	} else{
		objectReturn.withPlan = calculateWithPlan.toFixed(2);
	}

	if (callMinute === 0) {
		objectReturn.withoutPlan = 0;
	} else {
		objectReturn.withoutPlan = (callMinute * price).toFixed(2);
	}

	return objectReturn;
}

export {calculateTaxWithPlan};