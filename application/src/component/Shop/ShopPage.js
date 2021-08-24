import React, {useState, useEffect} from 'react'
import ItemCard from '../Item/ItemCard';
import './style.css';
import {datas} from '../../data/data.js'
const ShopPage=React.memo(function() {
  const [data,setData]=useState(datas);



 const filterProductFunc=(event)=>{
   const value=event.target.value;
   if(value==='all'){
     setData(datas)
   }else{
    const tempData=datas.filter(key=> key.category===value);
    setData(tempData);
   }
 }

 console.log(data);
    return (
        <>
        <div>
          
        
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


 

export default React.memo(ShopPage);