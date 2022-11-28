import React, { useContext } from 'react'
import Project from '../components/Project'
import Icon from '../components/Icon'
import { icons, images } from '../images'
import { localization } from '../localization'
import { languageContext } from '../context'

function Projects() {

  localization.setLanguage(useContext(languageContext).lang)

  return (
    <div>
      <Project title="Better Days"
        description={localization.betterDays}
        links={[
          <Icon size='small' src={icons.github} text="BetterDays på GitHub" link="https://github.com/kim-iths/BetterDays" />
        ]} />

      <Project title="Secret Shaker"
        description={localization.secretShaker}
        links={[
          <Icon size='small' src={icons.github} text="SecretShaker på GitHub" link="https://github.com/kim-iths/SecretShaker" />
        ]} />

      <Project title="rgbgame"
        thumbnail={images.rgbgame}
        description={localization.rgbgame}
        links={[
          <Icon size='small'
            src={icons.github}
            text="rgbgame på GitHub"
            link="https://github.com/kim-iths/rgbgame" />,
          <Icon size='small'
            src={icons.website}
            text="rgbgame på webben"
            link="https://kim-iths.github.io/rgbgame/" />
        ]} />

      <Project title="Drinkos (legacy)"
        thumbnail={images.drinkos}
        description={localization.drinkosLegacy}
        links={[
          <Icon size='small' src={icons.github} text="drinkos på GitHub" link="https://github.com/kim-iths/drinkos" />,
          <Icon size='small' src={icons.website} text="drinkos på webben" link="https://kim-iths.github.io/drinkos/" />
        ]} />

      <Project title="Tiles"
        description={localization.tiles}
        links={[
          <Icon size='small' src={icons.github} text="tiles på GitHub" link="https://github.com/kim-iths/tiles" />
        ]} />

    </div>
  )
}

export default Projects