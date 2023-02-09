import LocalizedStrings from "react-localization";

export const localization = new LocalizedStrings({
    se: {
        // header and footer
        projects: "Projekt",
        about: "Om",
        contact: "Kontakt",

        // root
        meDesc: `Hej! Jag heter Kim och är en ${Math.abs(new Date().getFullYear() - 1999)} år gammal nyexaminerad apputvecklare.
        Jag har jobbat på en del projekt under mina år, allt från objektorienterat
         i Java och C# till mer frontend i React (tex denna sida!) och React Native, samt HTML, CSS och JavaScript. 
         I fliken "Om" kan du hitta mer om vilka teknologier jag har erfarenhet av.`,

        // projects
        featured: "Utvald",
        noImage: "Ingen bild ännu",
        betterDays: "En app för dig som vill spåra ditt välmående från dag till dag. I appen kommer du vid en vald tidpunkt på dagen få utvärdera den nuvarande eller tidigare dag, som sedan kommer sparas lokalt. Utifrån datan skapas en graf som visar hur den tidigare veckan sett ut, så att du kan undersöka vilka ändringar i din vardag som kan ha orsakat svängningar. Skapad I React Native som examensuppgift åt min partner <3.",
        secretShaker: "En app där du först väljer vilka ingredienser du har hemma, för att sedan skaka mobilen och få fram ett slumpmässigt recept utifrån tillgängliga ingredienser. Skapad i React Native.",
        rgbgame: "Tryck på fyrkanten för att tjäna ihop mer färg, som sedan kan användas som valuta för att köpa uppgraderingar eller automatiska generatorer som skapar färg automatiskt. Inspirerat av spel som Cookie Clicker. Skapad i React.",
        drinkos: "En sida för drinkar och recept där du kan leta upp specifika drinkar eller utforska själv. Skapad i React med hjälp av TypeScript.",
        drinkosLegacy: "(Gammal version) En enkel sida för drinkar och recept där du kan leta upp specifika drinkar eller utforska själv. Skapad med HTML, CSS och JavaScript.",
        tiles: "Ett enkelt spel som går ut på att så snabbt som möjligt trycka på rutor med annorlunda färg, vilka blir mindre och mindre för varje gång man trycker. Skapad med Kotlin i Android Studio.",

        // about
        aboutMeTitle: "Om mig",
        aboutMeDesc: `Mitt intresse för programmering och att skapa digitalt började redan i högstadiet,
        då jag använde GameMaker med dess egna språk GML för att skapa spel.
        I gymnasiet tog jag en kurs i C++ för att lära mig ett "riktigt" språk, och
        strax efter gymnasiet tog jag en onlinekurs i Java där jag fick lära mig göra appar till Android. 
        Detta fick mig att leta efter en officiell utbildning inom ämnet, och sommaren
        2022 tog jag examen med mitt Better Days-projekt som examensarbete och fick certifikat som Applikationsutvecklare.
        I dagsläget jobbar jag på CityMail men letar efter en plats inom webb- eller apputveckling.`,
        knowledge: "Kunskaper",
        mobile: "Mobil",
        miscellaneous: "Övrigt",

        // contact
        contactDesc: "Vill du komma i kontakt eller arbeta med mig? Skicka ett meddelande eller mail så svarar jag så fort jag kan!",
    },
    en: {
        // header and footer
        projects: "Projects",
        about: "About",
        contact: "Contact",

        // root
        meDesc: `Hello! My name is Kim and I am a ${Math.abs(new Date().getFullYear() - 1999)} year old newly graduated
        app developer. I have been working on a selection of different projects, ranging from object oriented in Java and C#, to frontend in React (like this page!) and React Native, along with HTML, CSS and JavaScript. You can find more info about what technologies i have experience with in the "About" tab.`,

        // projects
        featured: "Featured",
        noImage: "No image yet",
        betterDays: "An app for the one who wants to track their mental wellbeing from day to day. Inside the app, at a chosen time, you'll get to evaluate the current or past day, which will then be saved locally. A graph is made from this saved data, allowing you to see how the past week has been, and what might changes in your life that may have caused fluctuations. Created with React Native as a final, for my partner <3",
        secretShaker: "An app where you first get to choose ingredients you have available at home, then shake your phone to get a random recipe you can make with those chosen ingredients. Created with React Native.",
        rgbgame: "Press the square to get more color, which in turn can be used as a currency to buy upgrades or generators which produce color automatically. Inspirated by games like Cookie Clicker. Created with React.",
        drinkos: "A web page for drinks and recipes where you can look up specific drinks or explore on your own. Made with React using TypeScript.",
        drinkosLegacy: "(Old version) A simple web page for drinks and recipes where you can look up specific drinks or explore on your own. HTML, CSS and JavaScript.",
        tiles: "A simple game where the goal is to press a shrinking square among similarly colored squares on a grid, as fast as possible. Created with Kotlin in Android Studio.",

        // about
        aboutMeTitle: "About me",
        aboutMeDesc: `My interest for programming and digital creation started in late elementary school,
        where I used GameMaker to make simple games with their own language GML. In high school, I took a C++ course to learn a "real" language, and soon after that, I took an online course in how to make apps with Java in Android Studio.
        This gave me the opportunity to get a more official education, and in the summer of 2022 i graduated as an application developer with my Better Days project.
        Currently I am working as a mailman at CityMail, but am looking for a spot as a web or app developer.`,
        knowledge: "Knowledge",
        mobile: "Mobile",
        miscellaneous: "Miscellaneous",

        // contact
        contactDesc: "Do you want to come in contact or work with me? Send a message or email and I will answer as soon as I can!",

    }
})