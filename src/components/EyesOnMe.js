// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    
    const dealfocus = () => {
        console.log('Good!');
    };

    
    const dealblur = () => {
        
        console.log('Hey! Eyes on me!');
    };

    return (
        <button onFocus={dealfocus} onBlur={dealblur}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;
