import * as React from 'react';
import { RepaymentTable as TableData } from '../repayments';
import Dollars from '../components/Dollars';
import './RepaymentTable.css';

import {
	AutoSizer,
	Table,
	Column,
	TableCellRenderer,
} from 'react-virtualized';

export interface Props {
	data: TableData;
}

const dollarRenderer: TableCellRenderer = ({ cellData }) => (
	<Dollars>{cellData}</Dollars>
);

const RepaymentTable: React.StatelessComponent<Props> = ({ data }) => (
	<div className="RepaymentTable">
		<AutoSizer disableHeight={true}>
			{({ width }) => (
				<Table
					width={width}
					height={300}
					headerHeight={50}
					rowHeight={25}
					rowCount={data.length}
					rowGetter={({ index }) => data[index]}
				>
					<Column
						className="RepaymentTable-column"
						headerClassName="RepaymentTable-header"
						label="Period"
						dataKey="period"
						width={width * 1/12}
					/>
					<Column
						className="RepaymentTable-column"
						headerClassName="RepaymentTable-header"
						label="Repayment amount"
						dataKey="repaymentAmount"
						width={width * 2/12}
						cellRenderer={dollarRenderer}
					/>
					<Column
						className="RepaymentTable-column"
						headerClassName="RepaymentTable-header"
						label="Interest this payment"
						dataKey="interestThisPayment"
						width={width * 2/12}
						cellRenderer={dollarRenderer}
					/>
					<Column
						className="RepaymentTable-column"
						headerClassName="RepaymentTable-header"
						label="Principal this payment"
						dataKey="principalThisPayment"
						width={width * 2/12}
						cellRenderer={dollarRenderer}
					/>
					<Column
						className="RepaymentTable-column"
						headerClassName="RepaymentTable-header"
						label="Interest to date"
						dataKey="interestToDate"
						width={width * 2/12}
						cellRenderer={dollarRenderer}
					/>
					<Column
						className="RepaymentTable-column"
						headerClassName="RepaymentTable-header"
						label="Unpaid principal balance"
						dataKey="unpaidPrincipalBalance"
						width={width * 2/12}
						cellRenderer={dollarRenderer}
					/>
					<Column
						className="RepaymentTable-column"
						headerClassName="RepaymentTable-header"
						label="Cost to date"
						dataKey="costToDate"
						width={width * 2/12}
						cellRenderer={dollarRenderer}
					/>
				</Table>
			)}
		</AutoSizer>
	</div>
);

export default RepaymentTable;
