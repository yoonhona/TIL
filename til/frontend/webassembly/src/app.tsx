import ReactDom from "react-dom";
import React from 'react';

const go = new Go();
WebAssembly.instantiateStreaming(fetch('main.wasm'),go.importObject).then( res=> {
    go.run(res.instance)
})

const App  = () => {
    return (<div>test</div>)
}

ReactDom.render(<App />, document.getElementById('root'))
