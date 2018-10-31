import * as React from 'react';

export interface Props {

}

const RepaymentTableHeaderRow: React.StatelessComponent<Props> = () => (
	<tr className="RepaymentTableHeaderRow">
		<th className="text-right">Period</th>
		<th className="text-right">Repayment<br />amount</th>
		<th className="text-right">Interest this<br />payment</th>
		<th className="text-right">Principal this<br />payment</th>
		<th className="text-right">Interest<br />to date</th>
		<th className="text-right">Unpaid principal<br />balance</th>
		<th className="text-right">Cost<br />to date</th>
	</tr>
);

export default RepaymentTableHeaderRow;
