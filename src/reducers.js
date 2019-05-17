import Constants from './constants';
const {CHANGE_SEARCH_FIELD} = Constants;
const initialState = {
    searchField :''
};

export const searchContacts = (state = initialState, action = {}) =>{
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return(Object.assign({}, state , {searchField: action.payload}));
    
        default:
            return state;
    }
}

