import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../store/cartSlice';


const Products = () => {
    const dispatch = useDispatch();
    const [products , setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () =>{
            const res = await fetch('https://fakestoreapi.com/products');

            const data = await res.json();

            console.log(data);

            setProducts(data);
        }   
        fetchProducts();

     }, []);


     const handleAdd = (product) =>{
        dispatch(add(product))
             
     }

     return (
      <div className='ProductWrapper'>

        {
            products.map((product) => (
                <div className='card' key={products.id}>
                    <img src={products.image} alt="" />
                    <h4>{products.title}</h4>
                    <h3>{products.price}</h3>
                    <button className='btn' onClick={()=>{handleAdd(product)}}> add to cart </button>
                     </div>
            ))
        } 


     </div>
    
    )};

export default Products;

