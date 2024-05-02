import React, {useState} from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
  
    const handleButtonClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <h2>Licznik: {count}</h2>
        <button onClick={handleButtonClick}>Zwiększ licznik</button>
      </div>
    );
  };
  
  export default Counter;