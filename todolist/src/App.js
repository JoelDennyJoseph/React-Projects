import Header from "./components/header";
import TaskList from './components/tasklist';
import AddTask from './components/addtask';
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [Tasks, setTasks]  = useState([
    {
      id: 1,
      title: "Go for a walk",
      content: "7:00 PM",
      reminder: false, 
    },
    {
      id: 2,
      title: "Buy Groceries",
      content: "5:00 PM",
      reminder: true, 
    },
    {
      id: 3,
      title: "Pack bags",
      content: "9:00 PM",
      reminder: false, 
    },
    {
      id: 4,
      title: "Charge car",
      content: "10:00 PM",
      reminder: true, 
    }
  ]);

  const onDelete = (id) =>{
    setTasks(
      Tasks.filter( (task) => 
        task.id !== id      
      ));
  }

  const toggleReminder = (id) => {
    setTasks(
      Tasks.map( (task) => 
        task.id === id ? { ...task, reminder: !task.reminder} : task 
    ));
  };

  const addItem = (task) => {
    const id = Math.floor(Math.random()*10000) + 1;
    const newTask = { id, ...task }
    setTasks([...Tasks, newTask]);
  }

  return (
    <div className="App container">
      <Header 
      changeShowAdd={ () => {setShowAddTask(!showAddTask)} }
      addValue={showAddTask}
      />
      
      {showAddTask && <AddTask addItem={addItem}/>}
      
      { Tasks.length>0 ? 
        ( <TaskList allTasks={Tasks} onToggle={toggleReminder} onDelete={onDelete}/> ) 
        : 
        ( 'No Tasks to show' )
      }

    </div>
  );
}

export default App;