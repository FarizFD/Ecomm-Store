import React from 'react'
import DashBoard from './DashBoard';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const handlecart = () => {
        navigate('/Cart')
    }
    return (

        <>
            <div className='bg-secondary p-4'>
                <h3>Ecomm-Store</h3>
                <div className='row'>
                    <div className='col-sm-12 md-7 lg-6 xl-5'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button className='btn btn-success me-4' onClick={() => (navigate('/'))}>Home</button>
                            <input
                                type='search'
                                className='form-control w-25'
                                placeholder='Search...' />
                            <button className='btn btn-success ms-4' onClick={() => handlecart()}>Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <DashBoard /> */}
            </div>
        </>
    )
}

export default Home