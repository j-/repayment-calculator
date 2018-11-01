import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { buildRepaymentTable } from '../repayments';
import RepaymentTableRow from '../components/RepaymentTableRow';
import RepaymentTableHeaderRow from '../components/RepaymentTableHeaderRow';
import { debounce } from '../debounce-hoc';

import {
	RootReducerState,
	getLoanPrincipal,
	getRepaymentAmount,
	getInterestRatePeriodRatio,
	getNumberOfRepayments,
} from '../store';

interface StateProps {
	loanAmount: number;
	repaymentAmount: number;
	interestRatePeriodRatio: number;
	numberOfRepayments: number;
}

interface OwnProps {

}

export type Props = StateProps & OwnProps;

const RepaymentTable: React.StatelessComponent<Props> = (props) => (
	<table
		className="RepaymentTable table table-hover table-sm"
		style={{ tableLayout: 'fixed' }}
	>
		<thead>
			<RepaymentTableHeaderRow />
		</thead>
		<tbody>
			{buildRepaymentTable(props).map((repayment) => (
				<RepaymentTableRow
					key={repayment.period}
					repayment={repayment}
				/>
			))}
		</tbody>
	</table>
);

const DebouncedRepaymentTable = debounce(5000, RepaymentTable);

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state) => ({
	loanAmount: getLoanPrincipal(state),
	repaymentAmount: getRepaymentAmount(state),
	interestRatePeriodRatio: getInterestRatePeriodRatio(state),
	numberOfRepayments: getNumberOfRepayments(state),
});

export default connect(
	mapStateToProps,
)(DebouncedRepaymentTable);
