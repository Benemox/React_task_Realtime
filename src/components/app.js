import React, { useState } from 'react'
import {Form } from './Form'
import { DivTask } from './DivTask'
import { v4 as uuid } from 'uuid';
import {EditTask} from './Edittask'



export const App = () => {
    const [editing, setEditing] = useState(false)
    const initialFormState = { taskE:"", keyE: ''}
    const [tasks,settask] = useState([initialFormState])

    const deletetask = (keyE) => {
        settask(tasks.filter((task) =>task.keyE !== keyE))
      }
      const editTask = (task) => {
        setEditing(true)
      
        settask({taskE:task.taskE, keyE:task.keyE })
      }
      const updatetask = (key, taskUpdate) => {
        setEditing(false)
      
        settask(tasks.map((task) => (task.keyE=== key ? task.taskE : taskUpdate)))
      }

        // //handleAdd
        // const Addme = () => {
        //     setcategories([...categories,"otro"])
        // }


    return (
        <div>
            <h2>task to do</h2>
            {editing ? (
                <div>
                <h2>Edit user</h2>
                <EditTask
                    editTask={editTask}
                    editing={editing}
                    updatetask={updatetask}
                />
                </div>
            ) : (
            < Form settask= {settask} /> )}
            <hr/>
              {   console.log(tasks)}
              {
              tasks.map((task) =>
                        <DivTask
                        task={task}
                        key= {uuid()}
                        deletetask={deletetask}
                        editTask={editTask}
                             />)
                }
           
            
            </div>)
}

