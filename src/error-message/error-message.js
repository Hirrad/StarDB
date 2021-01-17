import React from 'react';
import './error-message.css';
import YodaError from './img/yoda-error.png'

const ErrorMessage = () => {
    return (
        <div className='col-6 d-flex align-items-center justify-content-center flex-wrap flex-column'>
            <img src={YodaError} alt="Error" className='error'/>
            <div className='d-flex flex-column align-items-center mb-2'>
                <div>Планету потеряли мы!</div>
                <div> В ближайшее время найти ее, постараемя мы</div>
            </div>
        </div>
    )
}
export default ErrorMessage;