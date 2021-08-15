import React from 'react'
import Button from '../../components/Button';

const ButtonsList = ({
  buttonsArray
}) => {
  return (
    <div className="buttonsContainer">
      {buttonsArray.map((buttonObj, index) => {
        const label = buttonObj.label;
        const handleClick = buttonObj.handleClick;

        return (
          <Button key={index} handleClick={handleClick} label={label} />
        )
      })}
    </div>
  )
}

export default ButtonsList;
