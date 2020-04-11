import { PROMOTIONS } from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        case actionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOTIONS_LOADING:
                return {...state, isLoading: true, errMess: null, promotions: []}
        
        case ActionTypes.PROMOTIONS_FAILED:
                        return {...state, isLoading: false, errMess: action.payload};
                        
        default: 
            return state;
    }
};