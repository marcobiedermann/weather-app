import { createStore } from 'redux';
import enhancer from '../middlewares';
import reducer from '../reducers';

const initialState = {};

const store = createStore(reducer, initialState, enhancer);

export default store;
