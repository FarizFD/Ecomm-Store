import React from 'react'

const CartItems = (props) => {
    return (
        <div className='m-4 d-flex justify-content-center align-items-center'>

            <img src={props.image} alt={props.title} height={170} width={200} className='border_radius ms-5 mt-3' />

            <h5 className='ms-3 mt-5'>{props.title}</h5>
            <h5 className='ms-3 mt-5'>Price:{`$${props.price}`}</h5>
            <h5 className='ms-3 mt-5'>Discount:{`${props.discount}`}%</h5>
            <h5 className='ms-3 mt-5'>Rating:{`${props.rating}`}</h5>
            <button className='btn btn-primary mt-5 ms-2' onClick={props.incrementItem}>+</button>
            <span className='ms-2 mt-5'>Quantity{props.count}</span>
            <button className='btn btn-primary mt-5 ms-2' onClick={props.decrementItem}>-</button>
            <button className='btn btn-danger ms-3 mt-5'onClick={props.removeItems}>Remove</button>
            
        </div>
    )
}

export default CartItems