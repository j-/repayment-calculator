import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';
import { RootReducerState, getLoanTerm } from '../store';
import { setLoanTerm } from 'src/store/actions';

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
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Input);
