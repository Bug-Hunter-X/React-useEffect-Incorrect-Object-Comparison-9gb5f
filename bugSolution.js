```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [someObject, setSomeObject] = useState({ value: 0 });
  const [previousSomeObject, setPreviousSomeObject] = useState(null);

  useEffect(() => {
    // Correct: Compare object string representations
    if (JSON.stringify(someObject) !== JSON.stringify(previousSomeObject)) {
      console.log('Object changed!');
      setPreviousSomeObject(someObject);
    }
  }, [someObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSomeObject({ value: someObject.value + 1 })}>Change Object</button>
    </div>
  );
}

export default MyComponent;
```