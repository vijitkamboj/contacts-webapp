 import Constants from './constants'
 const {CHANGE_SEARCH_FIELD} = Constants;

export const setSearchField = (text) => ({
    type : CHANGE_SEARCH_FIELD , 
    payload : text
})
