import React , {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>Guest Counter</h3>
            <h2>{count} 🕺 </h2>
            <button onClick={() => setCount(count + 1)}> WELCOME </button>
            <button onClick={() => setCount(count - 1)}> GOOD BYE</button>
        </div>
    );
}
export default Counter;