import './Welcome.css'

function Welcome() {
    return (
        <div className='Welcome'>
            <h1>hello</h1>
            <p>this project is undergoing a complete rebuild from the ground up,<br />
            mostly due to the abandonment of <code>create-react-app</code> which made<br />
            lots of problems with PWA caching and using new packages. however, I kept<br />
            most of the important scripting stuff, so the streamit! you know and love<br />
            should be back in a few days. check back for updates! <code>\(^o^)/</code></p>
            <p>also... peep the pretty rainbow :o</p>
        </div>
    );
}

export default Welcome;