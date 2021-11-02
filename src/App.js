import React, {useState} from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { languageContext } from './utils/context'
import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true)
  const [isLanguage, setIsLanguage] = useState({
    state: false,
    currentLanguage: 'Укр',
    languages: ['Рус', 'En'],
    allLanguages: ['Укр', 'Рус', 'En']
  });
  const changeLanguage = lang => {
    const fallbackLang = isLanguage.languages.map(item => {
        if(item === lang) {
            item = isLanguage.currentLanguage
        }
        return item
    })
    const newCurrentLanguage = lang

    setIsLanguage({...isLanguage, currentLanguage: newCurrentLanguage, languages:fallbackLang })
  }
  
  return (
    <languageContext.Provider value={{
      changeLanguage,
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
