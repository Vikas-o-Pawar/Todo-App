import React, { useState } from 'react'
import textValidContext from './TextValid-Context'

function TextValidProvider(props) {
    const [textIsValid, setTextIsValid] = useState(true);
    const [textLength, setTextLength] = useState(0);


    function updateTextIsValid(boolean) {
        setTextIsValid(boolean);
    }

    function updateTextLength(value) {
        setTextLength(value);
    }

    return (
        <textValidContext.Provider value={{textIsValid, updateTextIsValid, textLength, updateTextLength}}>
            {props.children}
        </textValidContext.Provider>
    )
}

export default TextValidProvider
