import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Project Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
            <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;
