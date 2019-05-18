import {updateSearchBar} from './constant'

export const setSearchField = (text) => {
    return(
        {type : updateSearchBar,
        payload : text
        }
    )
}