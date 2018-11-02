import { connect, MapStateToProps } from 'react-redux';
import { buildRepaymentTable, RepaymentTable as TableData } from '../repayments';
import { debounce } from '../debounce-hoc';
import RepaymentTable from '../components/RepaymentTable';

import {
	RootReducerState,
	getLoanPrincipal,
	getRepaymentAmount,
	getInterestRatePeriodRatio,
	getNumberOfRepayments,
} from '../store';

interface StateProps {
	data: TableData;
}

const RepaymentTableDebounced = debounce(200, RepaymentTable);

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	data: buildRepaymentTable({
		loanAmount: getLoanPrincipal(state),
		repaymentAmount: getRepaymentAmount(state),
		interestRatePeriodRatio: getInterestRatePeriodRatio(state),
		numberOfRepayments: getNumberOfRepayments(state),
	}),
});

export default connect<StateProps>(
	mapStateToProps,
)(RepaymentTableDebounced);
