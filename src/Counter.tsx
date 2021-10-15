import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>
                You clicked {count} time{count == 0 ? '' : 's'}
            </p>
            <input type="button" value="increment" onClick={() => setCount(count + 1)} />
            {count > 0 && <input type="button" value="decrement" onClick={() => setCount(count - 1)} />}
        </div>
    );
}

export default Counter;
