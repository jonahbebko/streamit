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
        </div>
      </div>
      <div className="App-body">
        <h1>streamit!</h1>
        <p>this project is undergoing a complete rebuild from the ground up,<br />
        mostly due to the abandomnemt of <code>create-react-app</code> which made<br />
        lots of problems with PWA caching and using new packages. however, I kept<br />
        most of the important scripting stuff, so streamit! should be back in a few<br />
        days. check back for updates!</p>
      </div>
    </div>
  )
}

export default App
