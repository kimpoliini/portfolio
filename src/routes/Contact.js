import React, { useContext } from 'react'
import Icon from '../components/Icon'
import { languageContext } from '../context'
import { icons } from '../images'
import { localization } from '../localization'

function Contact() {

  localization.setLanguage(useContext(languageContext).lang)

  let phoneNr = "073 268 73 75"
  let email = "kimpas@hotmail.se"
  let github = "https://github.com/kim-iths"

  return (
    <div>
      <p>{localization.contactDesc}</p>


      <Icon src={icons.phone} size="small"
        text={phoneNr}
        link={'tel: ' + phoneNr} />
      <Icon src={icons.email} size="small"
        text={email}
        link={'mailto: ' + email} />
      <Icon src={icons.github} size="small"
        text="kim-iths"
        link={github} />

    </div>
  )
}

export default Contact