import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CardResident.css'
const CardResident = ({url}) => {
  const [resident, setResident] = useState()
  useEffect(() => {
    axios.get(url)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
  }, [])
  
  /* console.log(resident) */
  const bg = {
    dead: '#B94343',
    alive: '#4AB648',
    unknown: '#938686'
}
  let bgColor;
  if(resident?.status === 'Alive') {
    bgColor = bg.alive
  } else if(resident?.status === 'Dead') {
    bgColor = bg.dead
  } else {
    bgColor = bg.unknown
  }
    return (
    <article className='card'>
        <header className='card__header'>
            <img className='header__image' src={resident?.image} alt="" />
            <div className='header__container'>
                <div className="header__circle"  style={{backgroundColor: bgColor}}></div>
                <span className='header__status'>{resident?.status}</span>
            </div>
        </header>
        <section className='card__info'>
            <h3 className='info__name'>{resident?.name}</h3>
            <hr className='info__border'/>
            <ul className='info__datos'>
              <li className='info__list'><span className='info__span'>Specie: </span>{resident?.species}</li>
              <li className='info__list'><span className='info__span'>Origin: </span>{resident?.origin.name}</li>
              <li className='info__list'><span className='info__span'>Episode where appear </span>{resident?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default CardResident