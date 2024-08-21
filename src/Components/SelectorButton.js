import React from 'react'

const SelectorButton = ({setType}) => {
  return (
    <div>
             <select className="form-select" onChange={setType}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
      
    </div>
  )
}

export default SelectorButton
