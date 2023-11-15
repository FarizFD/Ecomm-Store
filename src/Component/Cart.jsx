import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../Component/CartItems'
import { modify, removeItems } from '../Redux/Reducer'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const listItems = useSelector((state) => state.cart.list);
    console.log('listItems',listItems)

    const incrementItem = (element) => {
        dispatch(modify({ ...element, count: element.count + 1 }))
    };

    const decrementItem = (element) => {
        debugger
        if (element.count === 1) {
            dispatch(removeItems(element))
        }
        else {
            dispatch(modify({ ...element, count: element.count - 1 }))
        }
    }
    const removeItemsFromCart = (element) => {
        debugger;
        dispatch(removeItems(element))
    }
   
    return (
        <>
        {listItems.length > 0 ? (
          <>
            {listItems.map((element) => (
              <CartItems
                {...element}
                key={element.id}
                incrementItem={() => incrementItem(element)}
                decrementItem={() => decrementItem(element)}
                removeItems={() => removeItemsFromCart(element)}
              />
            ))}
            <button className='btn btn-outline-primary' onClick={()=>navigate('/Checkout')}>
              CheckOut
            </button>
          </>
        ) : (
          <h2 style={{ textAlign: 'center' }}>No Items In The Cart</h2>
        )}
      </>
    )
}

export default Cart