import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';
import { RootReducerState, getLoanPrincipal } from '../store';
import { setLoanPrincipal } from '../store/actions';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	value: getLoanPrincipal(state),
});

const mapDispatchToProps: MapDispatchToProps<P, P> = (dispatch) => ({
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => (
		dispatch(
			setLoanPrincipal(Number(e.currentTarget.value))
		)
	),
});

const mergeProps: MergeProps<P, P, P, P> = (state, dispatch, own) => ({
	...state,
	...dispatch,
	...own,
	type: 'number',
	min: 0,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Input);
