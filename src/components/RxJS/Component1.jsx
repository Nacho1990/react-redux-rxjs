import React from 'react'
import { sharingInformationService } from '../../services/sharing-information.service'

const Component1 = () => {

  const handleClick = () => {
    sharingInformationService.setSubject(true)
  }

  const handleClickNo = () => {
    sharingInformationService.setSubject(false)
  }

  return (
    <div>
      <button onClick={handleClick} >Sumar</button>
      <button onClick={handleClickNo} >Restar</button>
      </div>
  )
}

export default Component1