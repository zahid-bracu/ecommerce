import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {productList} from '../../redux/action/productsAction';
import ItemCard from '../Item/ItemCard';
import Fade from 'react-reveal/Fade';
const imageLink="https://i.ibb.co/g3WbDr1/200w.gif";


const Home=React.memo(function({productList, product, loading, error}) {
    const [data,setData]=useState([]);
    
    useEffect(() => {
        productList();
         
     },[]);
  
    return (
        <div className="d-flex flex-wrap justify-content-center  ">
           {
               loading && <img src={imageLink} className="mx-auto" />
           }
           {
               product && product.map((key,index)=>{
                if(index<=4){
                    return(
                        <Fade bottom><ItemCard data-aos="fade-up" className="col-lg-3 col-md-6 col-sm-12 col-12 " id={key.id} {...key}/></Fade>
                        
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