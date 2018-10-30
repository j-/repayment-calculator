import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';
import { RootReducerState, getLoanTerm } from '../store';
import { setLoanTerm } from '../store/actions';
import { MIN_LOAN_TERM } from '../loan';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	value: getLoanTerm(state),
});

const mapDispatchToProps: MapDispatchToProps<P, P> = (dispatch) => ({
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => (
		dispatch(
			setLoanTerm(Number(e.currentTarget.value))
		)
	),
});

const mergeProps: MergeProps<P, P, P, P> = (state, dispatch, own) => ({
	...state,
	...dispatch,
	...own,
	type: 'number',
	min: MIN_LOAN_TERM,
	step: 1,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Input);
