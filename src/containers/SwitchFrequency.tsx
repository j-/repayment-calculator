import * as React from 'react';
import * as classNames from 'classnames';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import Dollars from '../components/Dollars';
import { setRepaymentFrequency } from '../store/actions';
import { RepaymentFrequency } from '../repayments';

import {
	RootReducerState,
	getRepaymentAmountMonthly,
	getRepaymentAmountFortnightly,
	getRepaymentAmountWeekly,
	getRepaymentFrequency,
} from '../store';

interface StateProps {
	repaymentAmountMonthly: number;
	repaymentAmountFortnightly: number;
	repaymentAmountWeekly: number;
	repaymentFrequency: number;
}

interface DispatchProps {
	setRepaymentFrequency: (repaymentFrequency: number) => void;
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
	setRepaymentFrequency,
});

const SwitchFrequency: React.StatelessComponent<Props> = ({
	repaymentAmountMonthly,
	repaymentAmountFortnightly,
	repaymentAmountWeekly,
	repaymentFrequency,
	setRepaymentFrequency,
}) => (
	<ul className="SwitchFrequency nav nav-tabs row">
		<li className="nav-item col-sm">
			<a
				className={classNames('nav-link', repaymentFrequency === RepaymentFrequency.MONTHLY && 'active')}
				href="#"
				onClick={() => setRepaymentFrequency(RepaymentFrequency.MONTHLY)}
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
				onClick={() => setRepaymentFrequency(RepaymentFrequency.FORTNIGHTLY)}
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
				onClick={() => setRepaymentFrequency(RepaymentFrequency.WEEKLY)}
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
