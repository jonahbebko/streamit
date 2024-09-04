import './Welcome.css'

function Welcome() {
    return (
        <div className='Welcome'>
            <h1>hello</h1>
            <p>this project is undergoing a complete rebuild from the ground up,
            mostly due to the abandonment of <code>create-react-app</code> which made
            lots of problems with PWA caching and using new packages.</p>
            <p>streamit! is currently a dead project - any continual work will depend
            on to what degree the project would be useful to other people. i will
            continue to make small updates every now and then, but don't expect
            any big progress for a while. stay tuned! <code>\(^o^)/</code></p>
        </div>
    );
}

export default Welcome;