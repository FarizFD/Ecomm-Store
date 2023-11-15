import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(15);

    useEffect(() => {
        // Use setTimeout to decrement count every 7 seconds
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        // Use setTimeout to navigate after 15 seconds
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 15000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [navigate]);

    return (
        <h2 className='display-4 mt-5'>
            Your Order has been placed Successfully. You will be redirected within {count} seconds...
        </h2>
    );
};

export default Success;