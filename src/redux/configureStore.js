import { createStore, combineReducers } from 'redux';
import { Reducer, initialState } from './reducer';
import { Partners } from './partners';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Camspites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
}