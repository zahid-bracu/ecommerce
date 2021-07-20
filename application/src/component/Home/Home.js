import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {productList} from '../../redux/action/productsAction';
import ItemCard from '../Item/ItemCard';


const Home=React.memo(function({productList, product, loading, error}) {
    const [data,setData]=useState([]);
    
    useEffect(() => {
        productList();
         
     },[]);
  
    return (
        <div className="d-flex flex-wrap justify-content-center  ">
           {
               product && product.map((key,index)=>{
                if(index<=4){
                    return(
                        <ItemCard className="col-lg-3 col-md-6 col-sm-12 col-12 " id={key.id} {...key}/>
                    )
                }
               })
           }
        </div>
    )
})

const mapStateToProps=(state)=>({
    loading:state.productReducer.loading,
    product:state.productReducer.product,
    error:state.productReducer.error
  })
  
  export default connect(mapStateToProps,{productList})(Home);