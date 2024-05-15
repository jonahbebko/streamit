import './App.css'
import PWAPrompt from 'react-ios-pwa-prompt'

function App() {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('PWA is running in standalone mode');
  } else {
    console.log('PWA is running in browser window');
  }
  return (
    <>
      <PWAPrompt
        copyBody="streamit! has app functionality. Add it to your home screen to use in the background."
        copyShareButtonLabel="1. Press the Share button."
        copyAddHomeButtonLabel="2. Press Add to Home Screen."
        copyClosePrompt="Close" />
      <div className="App-root">
        <div className="App-header">
          <div className="App-header-home">
            <img src="logot512.png" alt="logo" />
            <h1>streamit!</h1>
            <p>pre-alpha 0.1.0</p>
          </div>
          <div className="App-header-library">
            <p>App-header-library</p>
            <p>(no peeking!)</p>
          </div>
        </div>
        <div className="App-body">
          <h1>hello</h1>
          <p>this project is undergoing a complete rebuild from the ground up,<br />
          mostly due to the abandonment of <code>create-react-app</code> which made<br />
          lots of problems with PWA caching and using new packages. however, I kept<br />
          most of the important scripting stuff, so the streamit! you know and love<br />
          should be back in a few days. check back for updates! <code>\(^o^)/</code></p>
        </div>
      </div>
    </>
  )
}

export default App
