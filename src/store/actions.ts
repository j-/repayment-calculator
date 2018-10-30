import { Action } from 'redux';

/* Set loan principal */

export interface ActionSetLoanPrincipal extends Action {
	type: 'SetLoanPrincipal';
	data: {
		loanPrincipal: number;
	};
}

export const isActionSetLoanPrincipal = (action: Action): action is ActionSetLoanPrincipal => (
	action.type === 'SetLoanPrincipal'
);

export const setLoanPrincipal = (loanPrincipal: number): ActionSetLoanPrincipal => ({
	type: 'SetLoanPrincipal',
	data: {
		loanPrincipal,
	},
});

/* Set loan term */

export interface ActionSetLoanTerm extends Action {
	type: 'SetLoanTerm';
	data: {
		loanTerm: number;
	};
}

export const isActionSetLoanTerm = (action: Action): action is ActionSetLoanTerm => (
	action.type === 'SetLoanTerm'
);

export const setLoanTerm = (loanTerm: number): ActionSetLoanTerm => ({
	type: 'SetLoanTerm',
	data: {
		loanTerm,
	},
});

/* Set repayment frequency */

export interface ActionSetRepaymentFrequency extends Action {
	type: 'SetRepaymentFrequency';
	data: {
		repaymentFrequency: number;
	};
}

export const isActionSetRepaymentFrequency = (action: Action): action is ActionSetRepaymentFrequency => (
	action.type === 'SetRepaymentFrequency'
);

export const setRepaymentFrequency = (repaymentFrequency: number): ActionSetRepaymentFrequency => ({
	type: 'SetRepaymentFrequency',
	data: {
		repaymentFrequency,
	},
});

/* Set interest rate */

export interface ActionSetInterestRate extends Action {
	type: 'SetInterestRate';
	data: {
		interestRate: number;
	};
}

export const isActionSetInterestRate = (action: Action): action is ActionSetInterestRate => (
	action.type === 'SetInterestRate'
);

export const setInterestRate = (interestRate: number): ActionSetInterestRate => ({
	type: 'SetInterestRate',
	data: {
		interestRate,
	},
});
