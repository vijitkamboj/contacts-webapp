import {updateSearchField} from './constant'

export const setSearchBar = (text) => {
    return(
        {type : updateSearchField,
        payload : text
        }
    )
}