import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {productList} from '../../redux/action/productsAction';
import ItemCard from '../Item/ItemCard';
import { Button, Nav, NavDropdown, Form, FormControl, Navbar } from 'react-bootstrap';
import './style.css';
const ShopPage=React.memo(function({productList, product, loading, error}) {
  const [data,setData]=useState(product);

  useEffect(() => {
    productList();
    
 },[]);

//  console.log(product);

 const filterProductFunc=(event)=>{
   console.log(event.target.value);
   const value=event.target.value;
   if(value==='all'){
     setData(product)
   }else{
    const tempData=product.filter(key=> key.category===value);
    console.log(tempData);
    setData(tempData);
   }
 }
    return (
        <>
        <div>
          <h1 className="text-center">{product.length} products</h1> 
          
          <div class="form-group custom-input-form">
          <label for="filterProduct" className="mb-2">
            <h6>Filter Category</h6>
          </label>
            <select class="form-control" onChange={filterProductFunc} id="filterProduct">
            <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
           
             </select>
          </div>


            <div className="d-flex flex-wrap justify-content-center  ">
            {
                data && data.map((key,index)=>{
                  if(index>=0){
                      return(
                          <ItemCard className="col-lg-3 col-md-6 col-sm-12 col-12 " id={key.id} {...key}/>
                      )
                  }
                })
            }
          </div>
          </div>
        </>
    )
})


const mapStateToProps=(state)=>({
  loading:state.productReducer.loading,
  product:state.productReducer.product,
  error:state.productReducer.error
})

export default connect(mapStateToProps,{productList})(ShopPage);