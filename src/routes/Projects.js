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
      <h2>{localization.featured}</h2>
      <Project title="Drinkos"
        thumbnail={images.drinkos}
        description={localization.drinkos}
        links={[
          <Icon size='small' src={icons.github} text="Drinkos på GitHub" link="https://github.com/kimpoliini/drinkos-v2" />,
          <Icon size='small' src={icons.website} text="Drinkos på webben" link="https://kimpoliini.github.io/drinkos-v2/" />
        ]} />
      <h2>{localization.projects}</h2>
      <Project title="Better Days"
        description={localization.betterDays}
        links={[
          <Icon size='small' src={icons.github} text="BetterDays på GitHub" link="https://github.com/kimpoliini/BetterDays" />
        ]} />
      <Project title="Better Days (Flutter)" description={localization.betterDaysFlutter} links={[]} />
      <Project title={localization.racingGameTitle} thumbnail={images.nyoom} description={localization.racingGame} links={[]} />
      <Project title="Secret Shaker"
        description={localization.secretShaker}
        links={[
          <Icon size='small' src={icons.github} text="SecretShaker på GitHub" link="https://github.com/kimpoliini/SecretShaker" />
        ]} />

      <Project title="rgbgame"
        thumbnail={images.rgbgame}
        description={localization.rgbgame}
        links={[
          <Icon size='small'
            src={icons.github}
            text="rgbgame på GitHub"
            link="https://github.com/kimpoliini/rgbgame" />,
          <Icon size='small'
            src={icons.website}
            text="rgbgame på webben"
            link="https://kimpoliini.github.io/rgbgame/" />
        ]} />

      <Project title="Drinkos (legacy)"
        thumbnail={images.drinkosLegacy}
        description={localization.drinkosLegacy}
        links={[
          <Icon size='small' src={icons.github} text="drinkos på GitHub" link="https://github.com/kimpoliini/drinkos" />,
          <Icon size='small' src={icons.website} text="drinkos på webben" link="https://kimpoliini.github.io/drinkos/" />
        ]} />

      <Project title="Tiles"
        description={localization.tiles}
        links={[
          <Icon size='small' src={icons.github} text="tiles på GitHub" link="https://github.com/kimpoliini/tiles" />
        ]} />

    </div>
  )
}

export default Projects