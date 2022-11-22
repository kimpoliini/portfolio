import React from 'react'
import Icon from '../components/Icon'
import { icons } from '../images'

function Contact() {

  let phoneNr = "073 268 73 75"
  let email = "kimpas@hotmail.se"
  let github = "https://github.com/kim-iths"

  return (
    <div>
      <p>
        Vill du komma i kontakt eller arbeta med mig? Skicka ett meddelande eller mail så svarar jag så fort jag kan!
      </p>


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