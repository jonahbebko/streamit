import './App.css'

function App() {
  return (
    <div className="App-root">
      <div className="App-header">
        <div className="App-header-home">
          <p>App-header-home</p>
        </div>
        <div className="App-header-library">
          <p>App-header-library</p>
          <p>(no peeking!)</p>
        </div>
      </div>
      <div className="App-body">
        <div className="App-body-logos">
          <img src="logot512.png" alt="logo" />
          <h1>streamit!</h1>
        </div>
        <p>this project is undergoing a complete rebuild from the ground up,<br />
        mostly due to the abandonment of <code>create-react-app</code> which made<br />
        lots of problems with PWA caching and using new packages. however, I kept<br />
        most of the important scripting stuff, so the streamit! you know and love<br />
        should be back in a few days. check back for updates! <code>\(^o^)/</code></p>
      </div>
    </div>
  )
}

export default App
