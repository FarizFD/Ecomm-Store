import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../Data/Products';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../Redux/Reducer';

const ProductPage = () => {
    const params = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [alert,setAlert] = useState(false)
    const items = products.find((element) => element.id === parseInt(params.id))
    console.log(typeof (items.id));

    const list = useSelector((state) => state.cart.list)
    const cartCount = list.find((element) => element.id === items.id);

    const handleAddItems = () => {
        dispatch(addItems(items))
        setAlert(true);
        setTimeout(()=>setAlert(false),3000)
    }
    return (
        <>
            <div className='card w-25 mt-5 cursor-pointer' style={{ marginLeft: '40%' }}  >
                {alert && <span className='alert alert-success'>Item Added To Cart</span>}
                <div>
                    <img src={items.image} alt={items.title} height={230} width={270} className='border_radius ms-4 mt-3' />
                </div>
                <div className='card-body ms-5'>
                    <h5 className='card-title'>{items.title}</h5>
                    <h5 className='mt-2'>Price:{`$${items.price}`}</h5>
                    <h5 className='mt-2'>Discount:{`${items.discount}`}%</h5>
                    <h5 className='mt-2'>Rating:{`${items.rating}`}</h5>
                    {items.stocks > 0 ?
                        <>
                            <button className='btn btn-outline-success'onClick={()=>navigate('/Checkout')}>Buy Now</button>

                            {cartCount?.count > 0 ?  <button className='btn btn-outline-dark ms-4' onClick={() => navigate('/Cart')}>Go To Cart</button>
                                :
                                <button className='btn btn-outline-warning ms-4' onClick={() => handleAddItems()}>Add To Cart</button>}
                        </> :
                        <button className='btn btn-outline-danger'>Out Of Stocks</button>

                    }
                </div>
            </div>
        </>
    )
}

export default ProductPage;