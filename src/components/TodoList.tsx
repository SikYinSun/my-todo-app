import { useState } from 'react'

export default function TodoList() {
  const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
  const [selectedIndex, setSelectedIndex] = useState<number| null>(null);

  // const handleChange = (index:number) => {
  //   setSelectedIndex(index);
  // }

  return (
    <div>
      {todos.length > 0 ? 
      (<ul className="list-group">
        {todos.map((todo, index) => (
        <li key={index} className={`list-group-item ${selectedIndex===index ? 'active' : ''}`} onClick={() => setSelectedIndex(index)}>{todo}</li>))
        }
      </ul>) 
      : 
      (<p>no-todo</p>)}
    </div>
  )
}
