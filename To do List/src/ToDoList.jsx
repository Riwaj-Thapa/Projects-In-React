import { func } from 'prop-types';
import React, {useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTasks] = useState("");

    function handleInputChange(e){
        setNewTasks(e.target.value)

    }

    function addTasks(){
        if(newTask.trim() != ""){
            setTasks(t=>[...t, newTask])
            setNewTasks("")
    }
        
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((_,i)=> i !== index);
        setTasks(updateTasks)

    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];

            setTasks(updatedTasks)
        }

    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];

            setTasks(updatedTasks)
        }


    }

    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
               <input type='text' 
               placeholder='Enter a task'
               value={newTask} 
               onChange={handleInputChange}/>

               <button 
                className='add-button'
                onClick={addTasks}>
                Add
                </button>

            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>

                        <button className='delete-button' onClick={()=>deleteTask(index)}>
                            Remove
                        </button>

                        <button className='move-button' onClick={()=>moveTaskUp(index)}>
                            👆
                        </button>

                        <button className='move-button' onClick={()=>moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>

        </div>
    )

}

export default ToDoList