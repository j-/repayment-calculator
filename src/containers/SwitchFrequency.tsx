import * as React from 'react';
import * as classNames from 'classnames';
import { connect, MapStateToProps } from 'react-redux';
import Dollars from '../components/Dollars';

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

}

interface OwnProps {

}

export type Props = StateProps & DispatchProps & OwnProps;

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	repaymentAmountMonthly: getRepaymentAmountMonthly(state),
	repaymentAmountFortnightly: getRepaymentAmountFortnightly(state),
	repaymentAmountWeekly: getRepaymentAmountWeekly(state),
	repaymentFrequency: getRepaymentFrequency(state),
});

const SwitchFrequency: React.StatelessComponent<Props> = ({
	repaymentAmountMonthly,
	repaymentAmountFortnightly,
	repaymentAmountWeekly,
	repaymentFrequency,
}) => (
	<ul className="SwitchFrequency nav nav-tabs row">
		<li className="nav-item col-sm">
			<a className={classNames('nav-link', repaymentFrequency === 12 && 'active')} href="#">
				<span className="h2">
					<Dollars>{repaymentAmountMonthly}</Dollars>
				</span> / Month
			</a>
		</li>
		<li className="nav-item col-sm">
			<a className={classNames('nav-link', repaymentFrequency === 26 && 'active')} href="#">
				<span className="h2">
					<Dollars>{repaymentAmountFortnightly}</Dollars>
				</span> / Fortnight
			</a>
		</li>
		<li className="nav-item col-sm">
			<a className={classNames('nav-link', repaymentFrequency === 52 && 'active')} href="#">
				<span className="h2">
					<Dollars>{repaymentAmountWeekly}</Dollars>
				</span> / Week
			</a>
		</li>
	</ul>
);

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
)(SwitchFrequency);
