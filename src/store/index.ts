import { Reducer } from 'redux';
import { calculateRepaymentAmount } from '../repayments';

import {
	isActionSetLoanPrincipal,
	isActionSetLoanTerm,
	isActionSetRepaymentFrequency,
	isActionSetInterestRate,
} from './actions';

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
	if (isActionSetLoanPrincipal(action)) {
		return {
			...state,
			loanPrincipal: action.data.loanPrincipal,
		};
	}

	if (isActionSetLoanTerm(action)) {
		return {
			...state,
			loanTerm: action.data.loanTerm,
		};
	}

	if (isActionSetRepaymentFrequency(action)) {
		return {
			...state,
			repaymentFrequency: action.data.repaymentFrequency,
		};
	}

	if (isActionSetInterestRate(action)) {
		return {
			...state,
			interestRate: action.data.interestRate,
		};
	}

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
	calculateRepaymentAmount({
		loanPrincipal: getLoanPrincipal(state),
		loanTerm: getLoanTerm(state),
		repaymentFrequency: getRepaymentFrequency(state),
		interestRate: getInterestRateAnnualPercentage(state),
	})
);

/** Repayment amount for weekly frequency. */
export const getRepaymentAmountWeekly = (state: RootReducerState) => (
	calculateRepaymentAmount({
		loanPrincipal: getLoanPrincipal(state),
		loanTerm: getLoanTerm(state),
		repaymentFrequency: 52,
		interestRate: getInterestRateAnnualPercentage(state),
	})
);

/** Repayment amount for fortnightly frequency. */
export const getRepaymentAmountFortnightly = (state: RootReducerState) => (
	calculateRepaymentAmount({
		loanPrincipal: getLoanPrincipal(state),
		loanTerm: getLoanTerm(state),
		repaymentFrequency: 26,
		interestRate: getInterestRateAnnualPercentage(state),
	})
);

/** Repayment amount for monthly frequency. */
export const getRepaymentAmountMonthly = (state: RootReducerState) => (
	calculateRepaymentAmount({
		loanPrincipal: getLoanPrincipal(state),
		loanTerm: getLoanTerm(state),
		repaymentFrequency: 12,
		interestRate: getInterestRateAnnualPercentage(state),
	})
);
