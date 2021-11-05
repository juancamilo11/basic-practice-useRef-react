import React, { useRef, useState } from 'react'

const CopyApp = () => {

    const [textInput, setTextInput] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const inputRef = useRef();

    const handleCopy = (e) => {
        const input = inputRef.current;
        input.select();
        document.execCommand('copy');
        setIsCopied(true);
        setTimeout(() => {
            setTextInput('');
            setIsCopied(false);
        }, 1500);
    }

    return (
        <div className="container">
            <h2 className="my-4">Copy Input</h2>
            <input 
                ref={inputRef}
                type="text"
                className="form-control my-3" 
                placeholder="Type some text here"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}/>
            <button className="btn btn-primary px-4" onClick={handleCopy}>Copy!</button>
            {isCopied && <h3 className="alert alert-success m-3">Copied to clipboard!</h3>}
        </div>
    )
}

export default CopyApp
