import React from 'react'

const FilterButton = ({ name, isPressed, setFilter }) => {
  return (
    <button onClick={() => setFilter(name)} disabled={isPressed} style={{flex:"1", border:"2px solid #ccc"}} className="disabled:bg-black disabled:text-white">{name}</button>
  )
}

export default FilterButton