import React from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate'

const Pagination = ({setPageNumber, pageNumber}) => {

    let next = () => {
        setPageNumber((x) => x + 1)
    }
    let prev = () => {
        if(pageNumber === 1) return;
        setPageNumber((x) => x - 1)
    }

  return (
    <div className='contenedor pagination justify-content-center aling-item-center gap-1 my-1'>
        <button onClick={prev} className='btn btn-primary' >Prev</button>
        <span className='btn btn-outline-primary'>{pageNumber}</span>
        <button onClick={next} className='btn btn-primary'>Next</button>
    </div>
  )
}

export default Pagination