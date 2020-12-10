import React from 'react';


export const DivTask = ({task,deletetask,editTask}) => {
    console.log(task)
    let {taskE,keyE}= task
    console.log(taskE)
    return (
        <table>
        <thead>
          <tr>
            <th>{taskE}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button  onclick ={(task)=>{ editTask(task)}}  >Edit</button>
              <button  onClick={() => deletetask(task.keyE)}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
}