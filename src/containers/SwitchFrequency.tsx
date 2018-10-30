import * as React from 'react';
import * as classNames from 'classnames';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Dollars from '../components/Dollars';
import { RepaymentFrequency } from '../repayments';

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

export type Props = StateProps & DispatchProps & OwnProps;

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

const SwitchFrequency: React.StatelessComponent<Props> = ({
	repaymentAmountMonthly,
	repaymentAmountFortnightly,
	repaymentAmountWeekly,
	repaymentFrequency,
	setRepaymentFrequencyMonthly,
	setRepaymentFrequencyFortnightly,
	setRepaymentFrequencyWeekly,
}) => (
	<ul className="SwitchFrequency nav nav-tabs row">
		<li className="nav-item col-sm">
			<a
				className={classNames('nav-link', repaymentFrequency === RepaymentFrequency.MONTHLY && 'active')}
				href="#"
				onClick={setRepaymentFrequencyMonthly}
			>
				<span className="h2">
					<Dollars>{repaymentAmountMonthly}</Dollars>
				</span> / Month
			</a>
		</li>
		<li className="nav-item col-sm">
			<a
				className={classNames('nav-link', repaymentFrequency === RepaymentFrequency.FORTNIGHTLY && 'active')}
				href="#"
				onClick={setRepaymentFrequencyFortnightly}
			>
				<span className="h2">
					<Dollars>{repaymentAmountFortnightly}</Dollars>
				</span> / Fortnight
			</a>
		</li>
		<li className="nav-item col-sm">
			<a
				className={classNames('nav-link', repaymentFrequency === RepaymentFrequency.WEEKLY && 'active')}
				href="#"
				onClick={setRepaymentFrequencyWeekly}
			>
				<span className="h2">
					<Dollars>{repaymentAmountWeekly}</Dollars>
				</span> / Week
			</a>
		</li>
	</ul>
);

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps,
)(SwitchFrequency);
