import {CREATE_MESSAGE} from '../actions/types'

const intialState = {}

export default function(state = intialState, action){
    switch(action.type){

        case CREATE_MESSAGE:
            return (state = action.payload)
        default: 
            return state;
    }
}