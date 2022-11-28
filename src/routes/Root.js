import React, { useContext } from 'react'
import './root.css'
import { images } from '../images'
import { localization } from '../localization'
import { languageContext } from '../context'

function Root() {

  localization.setLanguage(useContext(languageContext).lang)

  return (
    <div>
      <div className='image-and-text'>
        <div className='kim'>
          <img src={images.kim} alt="Me"/>
        </div>
        <p>{localization.meDesc}</p>
      </div>
    </div>
  )
}

export default Root