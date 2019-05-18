import {updateSearchFeild} from './constant'

export const setSearchBar = (text) => {
    return(
        {type : updateSearchFeild,
        payload : text
        }
    )
}