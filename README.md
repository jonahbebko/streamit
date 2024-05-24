# streamit!

web-based music streaming service powered by Vite (React) and PWA

## try it out!

https://jonahbebko.com/streamit/

## youtube.js

referenced in `search.jsx` is a gitignored file, `youtube.js`, which includes your YouTube v3 API key:

```js
import axios from 'axios'

const KEY = 'YOUR_API_KEY'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        type: 'video'
    },
    headers: {}
});
```