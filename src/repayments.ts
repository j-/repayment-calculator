export enum RepaymentFrequency {
	MONTHLY = 12,
	FORTNIGHTLY = 26,
	WEEKLY = 52,
}

/** Represents a single loan repayment. */
export interface Repayment {
	/** This repayment number. */
	period: number;
	/** Amount paid each period. */
	repaymentAmount: number;
	/** Interest paid this period. */
	interestThisPayment: number;
	/** Principal paid this period. */
	principalThisPayment: number;
	/** Amount of interest paid so far. */
	interestToDate: number;
	/** Amount of principal remaining. */
	unpaidPrincipalBalance: number;
	/** Total amount of principal and interest paid so far. */
	costToDate: number;
}

/** All repayments for the lifetime of a loan. */
export interface RepaymentTable extends Array<Repayment> {
	/** The total number of repayments. */
	length: number;
}

/** These values are used for calculating the repayment table. */
export interface RepaymentTableBuilderArgs {
	/** Amount originally borrowed. */
	loanAmount: number;
	/** Amount paid each period. */
	repaymentAmount: number;
	/** Interest charged per period (as a ratio). */
	interestRatePeriodRatio: number;
	/** Total number of repayments for this loan. */
	numberOfRepayments: number;
}

/** Generates a repayment table given details about a loan. */
export interface RepaymentTableBuilder {
	(args: RepaymentTableBuilderArgs): RepaymentTable;
}

export const buildRepaymentTable: RepaymentTableBuilder = ({
	loanAmount,
	repaymentAmount,
	interestRatePeriodRatio,
	numberOfRepayments,
}) => {
	const payment0: Repayment = {
		period: 0,
		repaymentAmount: 0,
		interestThisPayment: 0,
		principalThisPayment: 0,
		interestToDate: 0,
		unpaidPrincipalBalance: loanAmount,
		costToDate: 0,
	};
	const paymentN: Repayment = {
		period: 0,
		repaymentAmount, // Fixed
		interestThisPayment: 0,
		principalThisPayment: 0,
		interestToDate: 0,
		unpaidPrincipalBalance: 0,
		costToDate: 0,
	};
	const table: RepaymentTable = [payment0];
	let lastPayment = payment0;
	for (let period = 1; period <= numberOfRepayments; period++) {
		const thisPayment: Repayment = Object.create(paymentN);
		thisPayment.period = period;
		thisPayment.interestThisPayment = lastPayment.unpaidPrincipalBalance * interestRatePeriodRatio;
		thisPayment.principalThisPayment = thisPayment.repaymentAmount - thisPayment.interestThisPayment;
		thisPayment.interestToDate = lastPayment.interestToDate + thisPayment.interestThisPayment;
		thisPayment.unpaidPrincipalBalance = lastPayment.unpaidPrincipalBalance - thisPayment.principalThisPayment;
		thisPayment.costToDate = lastPayment.costToDate + repaymentAmount;
		table.push(thisPayment);
		lastPayment = thisPayment;
	}
	return table;
};

export interface RepaymentAmountCalculatorArgs {
	loanPrincipal: number;
	loanTerm: number;
	repaymentFrequency: number;
	interestRate: number;
}

export interface RepaymentAmountCalculator {
	(args: RepaymentAmountCalculatorArgs): number;
}

export const calculateRepaymentAmount: RepaymentAmountCalculator = ({
	loanPrincipal,
	loanTerm,
	repaymentFrequency,
	interestRate,
}) => (
	(loanPrincipal * (interestRate / 100 / repaymentFrequency)) /
	(1 - ((1 + (interestRate / 100 / repaymentFrequency)) ** -(loanTerm * repaymentFrequency)))
);
