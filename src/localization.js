import LocalizedStrings from "react-localization";

export const localization = new LocalizedStrings({
    se: {
        // header and footer
        projects: "Projekt",
        about: "Om",
        contact: "Kontakt",

        // root
        meDesc: `Jag har arbetat med flera projekt genom åren, allt från objektorienterad programmering i Java och C# till mer frontend-fokuserat arbete i React – som denna sida!

        Jag har även erfarenhet av apputveckling, både med nativa språk som Swift och Kotlin för iOS respektive Android, samt med crossplatformramverk som Flutter och React Native.
        
        Du kan hitta mer information om vilka teknologier jag har erfarenhet av under fliken "Om", och mina projekt under den lämpligt nämnda fliken "Projekt".`,
        meDescCont: `Jag har nyligen studerat C#.Net och webbutveckling på en yrkeshögskola och tog examen i juni 2025.
        Under studietiden fick jag även arbeta som praktikant på ett större företag, där jag fick möjligheten att implementera en efterfrågad funktion i en av deras produkter.

        På bilden kan du se mig och min grupp vinna en Hackathon på ITHS, något som bara var möjligt genom samarbete.`,
        // projects
        featured: "Utvald",
        noImage: "Ingen bild ännu",
        betterDays: "En app för dig som vill spåra ditt välmående från dag till dag. I appen kommer du vid en vald tidpunkt på dagen få utvärdera den nuvarande eller tidigare dag, som sedan kommer sparas lokalt. Utifrån datan skapas en graf som visar hur den tidigare veckan sett ut, så att du kan undersöka vilka ändringar i din vardag som kan ha orsakat svängningar. Skapad I React Native som examensuppgift åt min partner <3.",
        betterDaysFlutter:"Samma princip som Better Days, återskapad och förbättrad i Flutter/Dart.",
        racingGameTitle: "Bilspel",
        racingGame: "Obenämnt bilspel med inspiration av och fokus på svenska landsvägar och lokalområden, där du kör en alldaglig bil för att hjälpa invånarna med sina problem. Skapad i Unity och C#, med 3D-modeller jag skapat i Blender.",
        secretShaker: "En app där du först väljer vilka ingredienser du har hemma, för att sedan skaka mobilen och få fram ett slumpmässigt recept utifrån tillgängliga ingredienser. Skapad i React Native.",
        rgbgame: "Tryck på fyrkanten för att tjäna ihop mer färg, som sedan kan användas som valuta för att köpa uppgraderingar eller automatiska generatorer som skapar färg automatiskt. Inspirerat av spel som Cookie Clicker. Skapad i React.",
        drinkos: "En sida för drinkar och recept där du kan leta upp specifika drinkar eller utforska själv. Skapad i React med hjälp av TypeScript.",
        drinkosLegacy: "(Gammal version) En enkel sida för drinkar och recept där du kan leta upp specifika drinkar eller utforska själv. Skapad med HTML, CSS och JavaScript.",
        tiles: "Ett enkelt spel som går ut på att så snabbt som möjligt trycka på rutor med annorlunda färg, vilka blir mindre och mindre för varje gång man trycker. Skapad med Kotlin i Android Studio.",

        // about
        aboutMeTitle: "Om mig",
        aboutMeDesc: `Mitt intresse för programmering och att skapa digitalt började redan i högstadiet, då jag använde GameMaker med dess egna språk GML för att skapa spel.
        
        I gymnasiet tog jag en kurs i C++ för att lära mig ett mer användbart språk, och strax efter gymnasiet tog jag en onlinekurs i Java där jag fick lära mig göra appar till Android. 
        Detta fick mig att leta efter en officiell utbildning inom ämnet, och sommaren 2022 tog jag examen med mitt Better Days-projekt som examensarbete och fick certifikat som Applikationsutvecklare.
        
        2023 började jag studera C#.Net på ITHS för att bredda mina kunskaper, och tog examen i juni 2025.
        
        I dagsläget jobbar jag på egna projekt, samt söker en roll som webb- eller apputvecklare så att jag kan fortätta min karriär inom IT, och att utvecklas som programmerare.`,
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
        meDesc: `Hello! My name is Kim and I am a ${Math.abs(new Date().getFullYear() - 1999)} year old app and web developer, located in Stockholm, Sweden.
        I have worked on several projects over the years, ranging from object-oriented programming in Java and C# to more frontend-focused work in React - like this site!

        I have experience in app development as well, both using native languages like Swift and Kotlin for iOS and Android respectively, but as well cross-platform frameworks like Flutter and React Native.
        
        You can find more info about what technologies i have experience with in the "About" tab, and my projects in the appropriately named "Projects" tab.`,
        meDescCont: `I have most recently been studying C#.Net and web development at a vocational school, and I graduated in June of 2025.
        During my studies I also got to work as an intern at a larger company, getting the opportunity to implement a largly requested feature in one of their products.

        In the picture you can see me and my group win a Hackathon at ITHS, an accomplishment only achievable through cooperation.`,
        // projects
        featured: "Featured",
        noImage: "No image yet",
        betterDays: "An app for the one who wants to track their mental wellbeing from day to day. Inside the app, at a chosen time, you'll get to evaluate the current or past day, which will then be saved locally. A graph is made from this saved data, allowing you to see how the past week has been, and what might changes in your life that may have caused fluctuations. Created with React Native as a final, for my partner <3",
        betterDaysFlutter:"Built on the same grounds as Better Days, remade and improved using Flutter/dart.",
        racingGameTitle: "Racing game",
        racingGame: "Yet unnamed racing/car game with inspiration from and focus on swedish country roads and local areas, where you get to drive an ordinary car and help the locals with their issues. Made in Unity and C#, with 3D models made by me using Blender.",
        secretShaker: "An app where you first get to choose ingredients you have available at home, then shake your phone to get a random recipe you can make with those chosen ingredients. Created with React Native.",
        rgbgame: "Press the square to get more color, which in turn can be used as a currency to buy upgrades or generators which produce color automatically. Inspirated by games like Cookie Clicker. Created with React.",
        drinkos: "A web page for drinks and recipes where you can look up specific drinks or explore on your own. Made with React using TypeScript.",
        drinkosLegacy: "(Old version) A simple web page for drinks and recipes where you can look up specific drinks or explore on your own. HTML, CSS and JavaScript.",
        tiles: "A simple game where the goal is to press a shrinking square among similarly colored squares on a grid, as fast as possible. Created with Kotlin in Android Studio.",

        // about
        aboutMeTitle: "About me",
        aboutMeDesc: `My interest in programming and creating digitally started back in middle school, when I used GameMaker and its own language GML to make games.

        In high school, I took a course in C++ to learn a more useful language, and shortly after graduation I took an online course in Java where I learned to make Android apps.
        This led me to look for an official education in the field, and in the summer of 2022 I graduated with my "Better Days" project as my thesis and received a certificate as an Application Developer.

        In 2023, I started studying C#.Net at ITHS to broaden my knowledge, and graduated in June 2025.

        Currently, I am working on my own projects while looking for a role as a web or app developer so I can continue my career in IT and grow as a programmer.`,
        knowledge: "Skills",
        mobile: "Mobile",
        miscellaneous: "Miscellaneous",

        // contact
        contactDesc: "Do you want to come in contact or work with me? Send a message or email and I will answer as soon as I can!",

    }
})