import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../Component/CartItems'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../Data/Products'
const CheckOut = () => {
    const navigate = useNavigate();
    const listItems = useSelector((state) => state.cart.list);
    const params = useParams();
    const [state, setState] = useState(params.id ?
        [{ ...products.find((element) => element.id === parseInt(params.id)), count: 1 },] : listItems)

    const incrementItem = (element) => {
        const index = state.findIndex((product) => product.id === element.id);

        setState((state) => [
            ...state.slice(0, index),
            { ...element, count: element.count + 1 },
            ...state.slice(index + 1),])
    };

    const decrementItem = (element) => {
        debugger
        if (element.count === 1) {
            removeItemsFromCart(element)
        }
        else{

            const index = state.findIndex((product) => product.id === element.id);
    
            setState((state) => [
                ...state.slice(0, index),
                { ...element, count: element.count - 1 },
                ...state.slice(index + 1),])
        }
    }
    const removeItemsFromCart = (element) => {
        debugger;
        const index = state.list.findIndex((product) => product.id === element.id);
    
        setState((state) => [
            ...state.slice(0, index),
            ...state.slice(index + 1),])
    }
    return (
        <>
            {state.length > 0 ? (
                <>
                    {state.map((element) => (
                        <CartItems
                            {...element}
                            key={element.id}
                            incrementItem={() => incrementItem(element)}
                            decrementItem={() => decrementItem(element)}
                            removeItems={() => removeItemsFromCart(element)}
                        />
                    ))}
                    <button className='btn btn-outline-primary' onClick={() => navigate('/Success')}>
                        Place Order
                    </button>
                </>
            ) : (
                <h2 style={{ textAlign: 'center' }}>No Items In The CheckOut</h2>
            )}
        </>
    )
}

export default CheckOut