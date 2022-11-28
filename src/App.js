import { Outlet, Link } from "react-router-dom";
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { languageContext } from "./context";
import { localization } from "./localization";
import Icon from './components/Icon'
import { icons } from "./images";


function App() {

  const [lang, setLang] = useState("se")
  localization.setLanguage(lang)
  let selectedLangStyle = {backgroundColor: "rgba(70, 170, 200, 0.5)", borderRadius: "8px"}


  return (
    <languageContext.Provider value={{ lang, setLang }}>
      <div className="App">
        <header className="App-header">
          <div className='header-left'>
            <Link to={'/'}><h1>Kim Hellman</h1></Link>
          </div>
          <nav className='header-right'>
            <Link to={'projects'}>{localization.projects}</Link>
            <Link to={'about'}>{localization.about}</Link>
            <Link to={'contact'}>{localization.contact}</Link>
          </nav>
        </header>
        <hr></hr>
        <div className="content">
          <Outlet />
        </div>
        <hr></hr>
        <footer>
          <Icon style={lang == "se" ? selectedLangStyle : null} src={icons.swedish} onClick={()=> setLang("se")}/>
          <Icon style={lang == "en" ? selectedLangStyle : null} src={icons.english} onClick={()=> setLang("en")}/>
        </footer>
      </div>
    </languageContext.Provider>
  );
}

export default App;
