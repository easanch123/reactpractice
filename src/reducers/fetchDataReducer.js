import { FETCH_DATA, GET_CHARACTERS } from "../actions/types"

export default function( state = {}, action ){
    switch(action.type){
        case FETCH_DATA:
            return action.payload || false
        case GET_CHARACTERS:
            return action.payload || false
        default:
            return state
    }
}

