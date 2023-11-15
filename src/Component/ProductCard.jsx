import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
  const navigate = useNavigate()
  const mask = (title) => {
    return (
      `${title.slice(0, 20).padEnd(title.length, '...')}`
    )
  }
  // console.log(mask)
  return (
    <div className='card m-2 cursor-pointer' onClick={()=>navigate(`/productPage/${props.id}`)}>
      <div>
        <img src={props.image} alt={props.title} height={100} width={100} className='border_radius ms-5 mt-3' />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{mask(props.title)}</h5>
        <h5 className='mt-2'>Price:{`$${props.price}`}</h5>
        <h5 className='mt-2'>Discount:{`${props.discount}`}%</h5>
        <h5 className='mt-2'>Rating:{`${props.rating}`}</h5>
        {props.stocks>1?
         <button className='btn btn-outline-success'>Available</button>:
         <button className='btn btn-outline-danger'>Out Of Stocks</button>
       
        }
       
      </div>
    </div>
  )
}

export default ProductCard