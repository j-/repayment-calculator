import { connect, MapStateToProps, MapDispatchToProps, MergeProps } from 'react-redux';
import Input, { Props as InputProps } from '../components/Input';
import { RootReducerState, getLoanPrincipal } from '../store';

const mapStateToProps: MapStateToProps<InputProps, InputProps, RootReducerState> = (state) => ({
	value: getLoanPrincipal(state),
});

const mapDispatchToProps: MapDispatchToProps<InputProps, InputProps> = ({

});

const mergeProps: MergeProps<InputProps, InputProps, InputProps, InputProps> = (state, dispatch, own) => ({
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
