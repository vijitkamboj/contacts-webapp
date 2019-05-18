import {updateSearchFeild} from './constant';

const initial_state ={
    searchField : ''
}

export const searchContacts = (state = initial_state ,action={} ) => {
    switch (action.type) {
        case updateSearchFeild:
            return( Object.assign(state ,{} , {searchField : action.payload}) )
    
        default:
            return state;
    }
}