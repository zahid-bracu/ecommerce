import React, {useState, useEffect} from 'react'
import fakeData from '../fakeData'
import ItemCard from '../Item/ItemCard';
export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
    }, [])
    console.log(data);
    return (
        <div className="d-flex flex-wrap justify-content-center  ">
           {
               data && data.map((key,index)=>{
                return(
                    <ItemCard className="col-lg-3 col-md-6 col-sm-12 col-12 " id={key.id} {...key}/>
                )
               })
           }
        </div>
    )
}
