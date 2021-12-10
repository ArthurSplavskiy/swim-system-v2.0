import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { languageContext } from './utils/context'
import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { splitText, fadeInScroll, fadeInOnLoad } from './utils/onScrollAnimation'


function App() {
  const { i18n } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [langStatus, setLangStatus] = useState(false)
  const [isLanguage, setIsLanguage] = useState({
    state: false,
    currentLanguage: 'ua',
    languages: ['en'],
    allLanguages: ['ua', 'en']
  });
  
  const changeAppLanguage = lang => {
    console.log('CHANGE APP LANG ', lang)
    const fallbackLang = isLanguage.languages.map(item => {
        if(item === lang) {
            item = isLanguage.currentLanguage
        }
        return item
    })
    const newCurrentLanguage = lang

    setIsLanguage({...isLanguage, currentLanguage: newCurrentLanguage, languages:fallbackLang })

    i18n.changeLanguage(lang)
    console.log('after change Lang')
    setLangStatus(prev => !prev)
  }
 
  useEffect(() => {
    new splitText()
    console.log('RENDER CCC')

    new fadeInScroll()
    new fadeInOnLoad()
  }, [langStatus])
  
  //const windowWidth = window.innerWidth

  // window.addEventListener('resize', (e) => {

  //   if(windowWidth !== e.target.innerWidth) {
  //     window.location.reload(true);
  //   }
    
  // })
  
  return (
    <languageContext.Provider value={{
      changeAppLanguage,
      isLanguage,
      setIsLanguage
    }}>
      <BrowserRouter>
        <Switch >
          <Route exact path='/' render={(props) => <Home {...props} loading={loading} setLoading={setLoading} />} />
          <Route path='/404' render={(props) => <NotFound {...props} setLoading={setLoading} />} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </languageContext.Provider>
  );
}

export default App;
