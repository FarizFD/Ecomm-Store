import React from 'react'
import {products} from '../Data/Products'
import ProductCard from './ProductCard'
const DashBoard = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center p-4'>
        {products.map((items)=> <ProductCard {...items} key={items.id}/>)}
       
    </div>
  )
}

export default DashBoard