import { Reducer } from 'redux';

export interface RootReducerState {

}

const DEFAULT_STATE: RootReducerState = {

};

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
	return state;
};

export default reducer;
