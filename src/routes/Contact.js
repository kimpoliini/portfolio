import React from 'react'
import Icon from '../components/Icon'
import { icons } from '../images'

function Contact() {

  let phoneNr = "073 268 73 75"
  let email = "kimpas@hotmail.se"
  let github = "https://github.com/kim-iths"

  return (
    <div>
      Vill du komma i kontakt med mig? Synd för dig din jävla jävel om du ringer mig kommer jagk omma till ditt hus och slå in dina väggar md en släögga och sen framkalla jeesus på dina syskon och flöäörldrar och vänner och barn och husdhur och han kommer skicka blixtar på allihopa så att dem DÖR FETT hårt


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