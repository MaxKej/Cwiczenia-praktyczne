import React, {useState} from "react";

const ToDo: React.FC = () =>
{
    const [inputText, setInputText] = useState<string>('');
    const [todos, setTodos] = useState<string[]>([]);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(event.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputText.trim() !== '') {
        setTodos([...todos, inputText]);
        setInputText('');
      }
    };


    return(
        <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Dodaj do listy</button>
        
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
};

export default ToDo;