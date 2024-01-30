import { useState } from 'react'
import Header from './Header'
import './App.css'
import Main from './Body'
import Footer from './Footer'
import themeContext from './themeContext'

function App() {
  const [theme, setTheme] = useState("light")

  function changeTheme(e){
    setTheme(e.target.value)
  }

  return (
    <themeContext.Provider value={{
      color: theme,
      changeTheme: changeTheme
    }}>
      <div className={`${theme}-app`}>
        <Header />
        <Main />
        <Footer />
      </div>
    </themeContext.Provider>
  )
}

export default App