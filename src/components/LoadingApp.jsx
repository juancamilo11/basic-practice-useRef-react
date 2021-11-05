import React, { useState } from 'react'
import Card from './Card'

const LoadingApp = () => {

    const [show, setShow] = useState(false);

    const showHideHandle = () => {
        setShow(!show);
    }

    return (
        <div>
            <h2 className="my-4">Loading App</h2>
            
            { show && <Card />}
            
            <button className="btn btn-primary m-3" onClick={() => showHideHandle()}>{show ? 'Hide' : 'Show'}</button>

        </div>
    )
}

export default LoadingApp
