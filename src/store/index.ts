import { Reducer } from 'redux';
import { RepaymentFrequency, calculateRepaymentAmount } from '../repayments';
import { MIN_LOAN_TERM } from '../loan';

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
			loanTerm: Math.max(action.data.loanTerm, MIN_LOAN_TERM),
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
	}) || 0
);

/** Repayment amount for weekly frequency. */
export const getRepaymentAmountWeekly = (state: RootReducerState) => (
	calculateRepaymentAmount({
		loanPrincipal: getLoanPrincipal(state),
		loanTerm: getLoanTerm(state),
		repaymentFrequency: RepaymentFrequency.WEEKLY,
		interestRate: getInterestRateAnnualPercentage(state),
	}) || 0
);

/** Repayment amount for fortnightly frequency. */
export const getRepaymentAmountFortnightly = (state: RootReducerState) => (
	calculateRepaymentAmount({
		loanPrincipal: getLoanPrincipal(state),
		loanTerm: getLoanTerm(state),
		repaymentFrequency: RepaymentFrequency.FORTNIGHTLY,
		interestRate: getInterestRateAnnualPercentage(state),
	}) || 0
);

/** Repayment amount for monthly frequency. */
export const getRepaymentAmountMonthly = (state: RootReducerState) => (
	calculateRepaymentAmount({
		loanPrincipal: getLoanPrincipal(state),
		loanTerm: getLoanTerm(state),
		repaymentFrequency: RepaymentFrequency.MONTHLY,
		interestRate: getInterestRateAnnualPercentage(state),
	}) || 0
);
