import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';
import { RootReducerState, getInterestRateAnnualPercentage } from '../store';
import { setInterestRate } from '../store/actions';
import { MIN_INTEREST_RATE, MAX_INTEREST_RATE } from '../loan';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	value: getInterestRateAnnualPercentage(state),
});

const mapDispatchToProps: MapDispatchToProps<P, P> = (dispatch) => ({
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => (
		dispatch(
			setInterestRate(Number(e.currentTarget.value))
		)
	),
});

const mergeProps: MergeProps<P, P, P, P> = (state, dispatch, own) => ({
	...state,
	...dispatch,
	...own,
	type: 'number',
	min: MIN_INTEREST_RATE,
	max: MAX_INTEREST_RATE,
	step: 0.1,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Input);
