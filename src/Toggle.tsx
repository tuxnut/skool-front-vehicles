import React, { useState } from 'react';

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <input type="button" value={isOn ? 'click to hide' : 'click to display'} onClick={() => setIsOn(!isOn)} />
            {isOn && <p>Coucou</p>}
        </div>
    );
}

export default Toggle;
