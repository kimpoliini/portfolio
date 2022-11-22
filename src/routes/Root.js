import React from 'react'
import './root.css'
import { images } from '../images'

function Root() {
  return (
    <div>
      <div className='image-and-text'>
        <div className='kim'>
          <img src={images.kim} />
        </div>
        <p>
          Hej! Jag heter Kim och är en
          {" " + Math.abs(new Date().getFullYear() - 1999) + " "}
          år gammal nyexaminerad apputvecklare. Jag har jobbat på en del projekt under
          mina år, allt från objektorienterat i Java och C# till mer frontend i React (tex denna sida!) och React Native.
          I fliken "Om" kan du hitta mer om vilka teknologier jag har erfarenhet av.

        </p>
      </div>
    </div>
  )
}

export default Root