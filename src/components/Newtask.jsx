import { useState } from 'react';

const Newtask = ({ onAdd }) => {
  const [enteredTask, setEnteredtask] = useState('');

  const handleChange = (e) => {
    setEnteredtask(e.target.value)
  }

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask)
    setEnteredtask('');
  }

  return (
    <div className="flex itmes-center gap-4">
      <input 
        type="text" 
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button 
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default Newtask