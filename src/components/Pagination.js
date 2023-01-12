import React from 'react'

const Pagination = (props) => {
  const { page, totalPages, setPage } = props

  const onLeftClick = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage)
  }

  const onRightClick = () => {
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage)
  }

  const onPageClick = (p) => {
    setPage(p)
  }

  const items = []

  const min = Math.max(page - 3, 0)
  const max = Math.min(page + 3, totalPages-1)

  for (let p = min; p <= max; p++) {
    items.push(
      <button className='btn btn-outline-secondary' key={p} onClick={() => onPageClick(p)}>
        {p+1}
      </button>
    );
  }
  

  return (
    <div className='pagination'>
      <div>
        <button className='btn btn-secondary' onClick={onLeftClick}> Anterior</button>
      </div>
      {items}
      <div>
        <button className='btn btn-secondary' onClick={onRightClick}> Siguiente</button>
      </div>
    </div>
  )
}

export default Pagination