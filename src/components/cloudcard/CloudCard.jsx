import React from 'react'
import './CloudCard.scss'
const CloudCard = ({heading,para}) => {
  return (
    <div className='cloudcard'>
        <div>
         <img  className='cloud-icon' src='./images/check-mark.png' alt='tick-icon'/>
        </div>
        <div className='cloudcard-div'>
          <h2 className='cloudcard-div-h2'>{heading}</h2>
          <p className='cloudcard-div-p'>{para}</p>
        </div>
    </div>
  )
}

export default CloudCard