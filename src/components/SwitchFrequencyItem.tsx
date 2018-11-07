import * as React from 'react';
import * as classNames from 'classnames';
import './SwitchFrequencyItem.css';

export interface Props {
	isActive: boolean;
	onClick: () => void;
}

const cancel = (handler: () => void) => (e: React.SyntheticEvent) => {
	e.preventDefault();
	handler();
};

const SwitchFrequencyItem: React.StatelessComponent<Props> = ({ isActive, onClick, children }) => (
	<li className="SwitchFrequencyItem nav-item col-sm">
		<a
			className={classNames('SwitchFrequencyItem-link nav-link', isActive && 'active')}
			href="#"
			onClick={cancel(onClick)}
		>
			{children}
		</a>
	</li>
);

export default SwitchFrequencyItem;
