import React from 'react';
import './Location.css'
const LocationInfo = ({location}) => {
    return (
        <article className='location'>
            <h2 className='location__name'>{location?.name}</h2>
            <ul className='location__item'>
                <li className='location__list'><span className='location__span'>Type: </span>{location?.type}</li>
                <li className='location__list'><span className='location__span'>Dimension:</span>{location?.dimension}</li>
                <li className='location__list'><span className='location__span'>Population: </span>{location?.residents.length}</li>
            </ul>
        </article>
    )
}

export default LocationInfo;
