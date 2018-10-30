import { Reducer } from 'redux';

export interface RootReducerState {
	loanPrincipal: number;
	loanTerm: number;
	repaymentFrequency: number;
	interestRate: number;
}

const DEFAULT_STATE: RootReducerState = {
	loanPrincipal: 30000,
	loanTerm: 7,
	repaymentFrequency: 12,
	interestRate: 15.99,
};

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
	return state;
};

export default reducer;

/* User input values */

/** Original sum of money being borrowed (in dollars). */
export const getLoanPrincipal = (state: RootReducerState) => (
	state.loanPrincipal
);

/** Length of loan (in years). */
export const getLoanTerm = (state: RootReducerState) => (
	state.loanTerm
);

/** Number of repayments per year. */
export const getRepaymentFrequency = (state: RootReducerState) => (
	state.repaymentFrequency
);

/** Interest rate per annum (as a percentage). */
export const getInterestRateAnnualPercentage = (state: RootReducerState) => (
	state.interestRate
);

/* Calculated values */

/** Interest rate per annum (as a ratio). */
export const getInterestRateAnnualRatio = (state: RootReducerState) => (
	getInterestRateAnnualPercentage(state) / 100
);

/** Number of payments over the life of the loan. */
export const getNumberOfRepayments = (state: RootReducerState) => (
	getLoanTerm(state) * getRepaymentFrequency(state)
);

/** Interest rate per repayment (as a ratio). */
export const getInterestRatePeriodRatio = (state: RootReducerState) => (
	getInterestRateAnnualRatio(state) / getRepaymentFrequency(state)
);

/** Amount of each repayment including principal and interest. */
export const getRepaymentAmount = (state: RootReducerState) => (
	(getLoanPrincipal(state) * getInterestRatePeriodRatio(state)) /
	(1 - ((1 + getInterestRatePeriodRatio(state)) ** -getNumberOfRepayments(state)))
);
