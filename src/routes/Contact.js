import React, { useContext } from 'react'
import Icon from '../components/Icon'
import { languageContext } from '../context'
import { icons } from '../images'
import { localization } from '../localization'

function Contact() {

  localization.setLanguage(useContext(languageContext).lang)

  let phoneNr = "073 268 73 75"
  let email = "kim.hman@hotmail.com"
  let github = "https://github.com/kimpoliini/"

  return (
    <div>
      <h2>{localization.contact}</h2>
      <p>{localization.contactDesc}</p>

      <Icon src={icons.phone} size="small"
        text={phoneNr}
        link={'tel: ' + phoneNr} />
      <Icon src={icons.email} size="small"
        text={email}
        link={'mailto: ' + email} />
      <Icon src={icons.github} size="small"
        text="kimpoliini"
        link={github} />

    </div>
  )
}

export default Contact