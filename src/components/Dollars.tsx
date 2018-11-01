import * as React from 'react';
import { addThousandsSeparators, padNumber2 } from '../number';

export interface Props {
	children: number;
}

const Dollars: React.StatelessComponent<Props> = ({ children: amount }) => {
	const dollars = Math.floor(amount);
	const cents = Math.floor(amount * 100) % 100;
	const formatted = '$' + addThousandsSeparators(dollars) + '.' + padNumber2(cents);
	return <>{formatted}</>;
};

export default Dollars;
