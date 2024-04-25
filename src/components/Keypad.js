import React from 'react';

function Keypad() {
    
    const passwordinput = () => {
        console.log('Entering password...');
    };

    return (
        <div>
            <input type="password" onChange={passwordinput} />
        </div>
    );
}

export default Keypad;
