import './App.css'
import { useState } from 'react'
import PWAPrompt from 'react-ios-pwa-prompt'
import sha256 from 'js-sha256'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import Search from './pages/Search'
import Settings from './pages/Settings'

function App() {

  if (localStorage.getItem('uid') === null) {
    localStorage.setItem('uid', sha256.create().update(Date.now().toString()).hex());
    console.log(`first visit, creating uid ${localStorage.getItem('uid')}`);
  } else {
    console.log(`logged in as user ${localStorage.getItem('uid')}`);
  }

  const [welcome, setWelcome] = useState(true);
  const [home, setHome] = useState(false);
  const [search, setSearch] = useState(false);
  const [settings, setSettings] = useState(false);

  const rsetWelcome = () => {
    setWelcome(true);
    setHome(false);
    setSearch(false);
    setSettings(false);
  }
  const rsetHome = () => {
    setWelcome(false);
    setHome(true);
    setSearch(false);
    setSettings(false);
  }
  const rsetSearch = () => {
    setWelcome(false);
    setHome(false);
    setSearch(true);
    setSettings(false);
  }
  const rsetSettings = () => {
    setWelcome(false);
    setHome(false);
    setSearch(false);
    setSettings(true);
  }

  return (
    <>
      <PWAPrompt
        copyBody='streamit! has app functionality. Add it to your home screen to use in the background.'
        copyShareButtonLabel='1. Press the Share button.'
        copyAddHomeButtonLabel='2. Press Add to Home Screen.'
        copyClosePrompt='Close' />
      <div className='App-root'>
        <div className='App-header'>
          <div className='App-header-top' onClick={rsetWelcome}>
            <img src='logot512.png' alt='logo' />
            <h1>streamit!</h1>
            <p>pre-alpha 0.1.0</p>
          </div>
          <div className='App-header-bottom'>
            <button className='Banner-Home' style={{color: home ? 'white' : 'grey'}} onClick={rsetHome}>
              <span class='material-symbols-outlined'>home</span>
              <p>home</p>
            </button>
            <button className='Banner-Search' style={{color: search ? 'white' : 'grey'}} onClick={rsetSearch}>
              <span class='material-symbols-outlined'>search</span>
              <p>search</p>
            </button>
            <button className='Banner-Settings' style={{color: settings ? 'white' : 'grey'}} onClick={rsetSettings}>
              <span class='material-symbols-outlined'>settings</span>
              <p>settings</p>
            </button>
          </div>
        </div>
        <div className='App-body'>
          {welcome ? <Welcome /> : null}
          {home ? <Home /> : null}
          {search ? <Search /> : null}
          {settings ? <Settings /> : null}
        </div>
      </div>
    </>
  )
}

export default App
