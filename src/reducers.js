import {
    updateSearchField,
    REQUEST_CONTANCTS_PENDING,
    REQUEST_CONTANCTS_SUCCESS,
    REQUEST_CONTANCTS_FAILED
} from './constant';

const initialStateSearch = {
    searchField: ''
}

export const searchContacts = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case updateSearchField:
            return (Object.assign({}, state, {
                searchField: action.payload
            }))

        default:
            return initialStateSearch;
    }
}

const initialStateContacts = {
    isPending: false,
    contactState: [],
    error: ''
}

export const requestContactsAPI =(state = initialStateContacts, action = {}) => {
    switch (action.type) {
        case REQUEST_CONTANCTS_PENDING:
            return (Object.assign({}, state, {
                isPending: true
            }));
        case REQUEST_CONTANCTS_SUCCESS:
            return (Object.assign({}, state, {
                contactState: action.payload,
                isPending: false

            }));
        case REQUEST_CONTANCTS_FAILED:
            return (Object.assign({}, state, {
                error: action.payload,
                isPending: false
            }));

        default:
            return state;
    }
}
