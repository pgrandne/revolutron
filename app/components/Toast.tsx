'use client';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

export const Toast = ({ feedback, link, progression }: {
    feedback: string
    link: string
    progression: string | null
}) => {
    const Msg = () => (
        <div>
            {feedback} <a
                className='underline'
                href={`https://msprr0gajgn.typeform.com/to/DSl54TqJ#url=${progression}`} target="_blank"
            >
                {link}
            </a>
        </div>
    )

    useEffect(() => {
        toast(<Msg />)
    }
    );

    return (

        <ToastContainer
            position="bottom-right"
            autoClose={7000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />)
}