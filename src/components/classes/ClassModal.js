import React from 'react';
import './ClassModal.scss';

const ClassModal = ({classUrl, isClassActive}) => {

    return (
        <div>
            {
                isClassActive ?
                    <div className='active'>
                        <p>{classUrl.name}</p>
                        <p></p>
                        <p></p>
                    </div>
                    :
                    <div className='non-active'></div>
            }
        </div>
    );
};

export default ClassModal;