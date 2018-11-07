import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import SwitchFrequency from '../components/SwitchFrequency';

import {
	RootReducerState,
	getRepaymentAmountMonthly,
	getRepaymentAmountFortnightly,
	getRepaymentAmountWeekly,
	getRepaymentFrequency,
} from '../store';

import {
	setRepaymentFrequencyMonthly,
	setRepaymentFrequencyFortnightly,
	setRepaymentFrequencyWeekly,
} from '../store/actions';

interface StateProps {
	repaymentAmountMonthly: number;
	repaymentAmountFortnightly: number;
	repaymentAmountWeekly: number;
	repaymentFrequency: number;
}

interface DispatchProps {
	setRepaymentFrequencyMonthly: () => void;
	setRepaymentFrequencyFortnightly: () => void;
	setRepaymentFrequencyWeekly: () => void;
}

interface OwnProps {

}

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootReducerState> = (state) => ({
	repaymentAmountMonthly: getRepaymentAmountMonthly(state),
	repaymentAmountFortnightly: getRepaymentAmountFortnightly(state),
	repaymentAmountWeekly: getRepaymentAmountWeekly(state),
	repaymentFrequency: getRepaymentFrequency(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = ({
	setRepaymentFrequencyMonthly,
	setRepaymentFrequencyFortnightly,
	setRepaymentFrequencyWeekly,
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(SwitchFrequency);
