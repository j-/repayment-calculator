import * as React from 'react';
import { RepaymentFrequency } from '../repayments';
import SwitchFrequencyItem from './SwitchFrequencyItem';
import Dollars from './Dollars';

interface Props {
	repaymentAmountMonthly: number;
	repaymentAmountFortnightly: number;
	repaymentAmountWeekly: number;
	repaymentFrequency: number;
	setRepaymentFrequencyMonthly: () => void;
	setRepaymentFrequencyFortnightly: () => void;
	setRepaymentFrequencyWeekly: () => void;
}

const SwitchFrequency: React.StatelessComponent<Props> = ({
	repaymentAmountMonthly,
	repaymentAmountFortnightly,
	repaymentAmountWeekly,
	repaymentFrequency,
	setRepaymentFrequencyMonthly,
	setRepaymentFrequencyFortnightly,
	setRepaymentFrequencyWeekly,
}) => (
	<ul className="SwitchFrequency nav nav-tabs row card-header-tabs">
		<SwitchFrequencyItem
			isActive={repaymentFrequency === RepaymentFrequency.MONTHLY}
			onClick={setRepaymentFrequencyMonthly}
		>
			<span className="h2">
				<Dollars>{repaymentAmountMonthly}</Dollars>
			</span> / Month
		</SwitchFrequencyItem>
		<SwitchFrequencyItem
			isActive={repaymentFrequency === RepaymentFrequency.FORTNIGHTLY}
			onClick={setRepaymentFrequencyFortnightly}
		>
			<span className="h2">
				<Dollars>{repaymentAmountFortnightly}</Dollars>
			</span> / Fortnight
		</SwitchFrequencyItem>
		<SwitchFrequencyItem
			isActive={repaymentFrequency === RepaymentFrequency.WEEKLY}
			onClick={setRepaymentFrequencyWeekly}
		>
			<span className="h2">
				<Dollars>{repaymentAmountWeekly}</Dollars>
			</span> / Week
		</SwitchFrequencyItem>
	</ul>
);

export default SwitchFrequency;
