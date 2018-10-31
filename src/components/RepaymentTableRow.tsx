import * as React from 'react';
import { Repayment } from '../repayments';
import Dollars from './Dollars';

export interface Props {
	repayment: Repayment,
}

const RepaymentTableRow: React.StatelessComponent<Props> = ({ repayment }) => (
	<tr className="RepaymentTableRow">
		<td className="text-right">{repayment.period}</td>
		<td className="text-right"><Dollars>{repayment.repaymentAmount}</Dollars></td>
		<td className="text-right"><Dollars>{repayment.interestThisPayment}</Dollars></td>
		<td className="text-right"><Dollars>{repayment.principalThisPayment}</Dollars></td>
		<td className="text-right"><Dollars>{repayment.interestToDate}</Dollars></td>
		<td className="text-right"><Dollars>{repayment.unpaidPrincipalBalance}</Dollars></td>
		<td className="text-right"><Dollars>{repayment.costToDate}</Dollars></td>
	</tr>
);

export default RepaymentTableRow;
