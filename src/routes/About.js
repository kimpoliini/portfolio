import React, { useEffect } from 'react'
import './about.css'

function About() {

    // useEffect(() => {
    //     let jsli = document.getElementsByTagName("li")[2]

    //     jsli.addEventListener('mouseover', () => {
    //         let margin = parseInt(jsli.style.marginRight.slice(0, -2));

    //         jsli.style.marginRight =
    //             jsli.style.marginRight
    //                 ? margin + 1 + "px"
    //                 : "0px";
    //     })
    // }, [])


    return (
        <div>
            <h2>Om mig</h2>
            <p>Mitt intresse för programmering och att skapa digitalt började redan i högstadiet,
                då jag använde GameMaker med dess egna språk GML för att skapa spel.
                I gymnasiet tog jag en kurs i C++ för att lära mig ett "riktigt" språk, och
                strax efter gymnasiet tog jag en onlinekurs i Java där jag fick lära mig göra appar till Android.
                Detta fick mig att leta efter en officiell utbildning inom ämnet, och sommaren
                2022 tog jag examen med mitt Better Days-projekt som examensarbete och fick certifikat som Applikationsutvecklare.
                <br />
                <br />
                I dagsläget jobbar jag på CityMail men letar efter en plats inom webb- eller apputveckling.
            </p>

            <h2>Kunskaper</h2>

            <ul>
                <h4>Frontend</h4>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <h4>Mobil</h4>
                <li>React Native</li>
                <li>Kotlin</li>
                <li>Swift</li>
                <h4>Backend</h4>
                <li>C#.NET</li>
                <li>Java</li>
                <li>SQL</li>
                <h4>Övrigt</h4>
                <li>Git</li>
                <li>Scrum</li>
                <li>Figma</li>
                <li>Blender</li>
                <li>Photoshop</li>
            </ul>

        </div>
    )
}

export default About