import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';
import { RootReducerState, getLoanPrincipal } from '../store';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	value: getLoanPrincipal(state),
});

const mapDispatchToProps: MapDispatchToProps<P, P> = ({

});

const mergeProps: MergeProps<P, P, P, P> = (state, dispatch, own) => ({
	...state,
	...dispatch,
	...own,
	readOnly: true,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Input);
