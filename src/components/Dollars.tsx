import * as React from 'react';

export interface Props {
	children: number;
}

const Dollars: React.StatelessComponent<Props> = ({ children }) => (
	<>
		{children.toLocaleString('en-AU', {
			style: 'currency',
			currency: 'AUD',
		})}
	</>
);

export default Dollars;
