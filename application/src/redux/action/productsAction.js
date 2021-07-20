import {products_request,get_request_failed,get_request_success} from '../type/type.js';
import axios from 'axios';


export const productList =  ()=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:products_request
            })
            const res= await axios.get('https://fakestoreapi.com/products');
            console.log(res);
            dispatch({
                type:get_request_success,
                payload:res.data
            })
        }catch(error){
            dispatch({
                type:get_request_failed,
                payload:error.message
            })
        }
    }
}