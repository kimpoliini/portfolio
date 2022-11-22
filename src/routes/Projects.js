import React from 'react'
import Project from '../components/Project'
import Icon from '../components/Icon'
import { icons, images } from '../images'


function Projects() {
  return (
    <div>
      <Project title="Better Days"
        description="En app för dig som vill spåra ditt välmående från dag till dag.
        I appen kommer du vid en vald tidpunkt på dagen få utvärdera den nuvarande eller tidigare dag,
        som sedan kommer sparas lokalt. Utifrån datan skapas en graf som visar hur den tidigare veckan sett ut,
        så att du kan undersöka vilka ändringar i din vardag som kan ha orsakat svängningar.
        Skapad I React Native som examensuppgift åt min partner <3.
        "
        links={[
          <Icon size='small' src={icons.github} text="BetterDays på GitHub" link="https://github.com/kim-iths/BetterDays" />
        ]} />

      <Project title="Secret Shaker"
        description="En app där du först väljer vilka ingredienser du har hemma, 
  för att sedan skaka mobilen och få fram ett slumpmässigt recept utifrån tillgängliga
  ingredienser. Skapad i React Native."
        links={[
          <Icon size='small' src={icons.github} text="SecretShaker på GitHub" link="https://github.com/kim-iths/SecretShaker" />
        ]} />

      <Project title="Obenämnt clicker-spel"
      thumbnail={images.rgbgame}
        description="Tryck på fyrkanten för att tjäna ihop mer färg, som sedan kan användas
  som valuta för att köpa uppgraderingar eller automatiska generatorer som skapar färg automatiskt.
  Skapad i React."
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

      <Project title="Drinkos"
      thumbnail={images.drinkos}
        description="En enkel sida för drinkar och recept
        där du kan leta upp specifika drinkar eller utforska själv.
        Skapad med HTML, CSS och JavaScript."
        links={[
          <Icon size='small' src={icons.github} text="drinkos på GitHub" link="https://github.com/kim-iths/drinkos" />,
          <Icon size='small' src={icons.website} text="drinkos på webben" link="https://kim-iths.github.io/drinkos/" />
        ]} />




      <Project title="Tiles"
        description="Ett enkelt spel som går ut på att så snabbt som möjligt trycka
        på rutor med annorlunda färg, vilka blir mindre och mindre för varje gång man trycker.
        Skapad med Kotlin i Android Studio."
        links={[
          <Icon size='small' src={icons.github} text="tiles på GitHub" link="https://github.com/kim-iths/tiles" />
        ]} />

    </div>
  )
}

export default Projects