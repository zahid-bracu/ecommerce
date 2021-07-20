import {products_request,get_request_failed,get_request_success} from '../type/type.js';

const initialState={
    loading:false,
    product:[],
    error:''
}


export default function(state=initialState,action) {
    switch(action.type){
        case products_request:
            return{
                ...state,
                loading:true
            }
        case get_request_success:
            return{
                ...state,
                loading:false,
                product:action.payload
            }
        case get_request_failed:
            return{
                ...state,
                loading:false,
                product:[],
                error:action.payload
            }
        default:
            return state;
    }
}