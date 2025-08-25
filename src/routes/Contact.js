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
  let linkedin = "https://www.linkedin.com/in/kim-hellman/"

  return (
    <div>
      <h2>{localization.contact}</h2>
      <p>{localization.contactDesc}</p>

      <ul>

        <li>
          <Icon src={icons.phone} size="small"
            text={phoneNr}
            link={'tel: ' + phoneNr} />
        </li>
        <li>
          <Icon src={icons.email} size="small"
            text={email}
            link={'mailto: ' + email} />
        </li>
        <li>
          <Icon src={icons.github} size="small"
            text={github}
            link={github} />
        </li>
        <li>
          <Icon src={icons.linkedin} size="small"
            text={linkedin}
            link={linkedin} />
        </li>
      </ul>

    </div>
  )
}

export default Contact