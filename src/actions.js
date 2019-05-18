import {
    updateSearchField,
    REQUEST_CONTANCTS_PENDING,
    REQUEST_CONTANCTS_SUCCESS,
    REQUEST_CONTANCTS_FAILED
} from './constant';


export const setSearchBar = (text) => {
    return ({
        type: updateSearchField,
        payload: text
    })
}

export const requestContacts = () => (dispatch) => {
    dispatch({type : REQUEST_CONTANCTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( data => dispatch({type:REQUEST_CONTANCTS_SUCCESS , payload: data}))
    .catch( error => dispatch({tpe:REQUEST_CONTANCTS_FAILED, payload :error}))
}


