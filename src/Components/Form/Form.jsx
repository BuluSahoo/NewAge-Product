import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const [inputs, setInputs] = useState({
        task_name :"",
        category : "",
        jira_id : "",
        assignee : "",
        status : "",
        created : "",
        due : "",
        mock_up : "",
        notes : ""
    })
    const [records, setRecords] = useState([])

    const handleInput = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs({...inputs, [name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const newRecords = {...inputs, id : new Date().getTime().toString()}
        setRecords([...records, newRecords])
        setInputs({
            task_name :"",
            category : "",
            jira_id : "",
            assignee : "",
            status : "",
            created : "",
            due : "",
            mock_up : "",
            notes : "",

        })
    }

    const handleEdit = (index)=>{
        
    }


    return (
        <div>
            <form action="" className='form_section' onSubmit={handleSubmit}>
                <div className="form_container">
                    <input type="text" name="task_name" value={inputs.task_name} placeholder='Task Name' id='task' onChange={handleInput}/>
                    <select name="category" id="Categoy" onChange={handleInput}>
                        <option value="">Select Category</option>
                        <option value="NAP Bug Task">Nap Bug Task</option>
                        <option value="NAP Dev">NAP Dev</option>
                    </select>
                    <input type="text" name="jira_id" value={inputs.jira_id} placeholder='Jira ID' id='jira' onChange={handleInput}/>
                </div>
                <div className="form_container2">
                    <select name="assignee" id="Categoy" onChange={handleInput}>
                        <option value="">Select Assignee</option>
                        <option value="Bibhu">Bibhu</option>
                        <option value="Tanzil">Tanzil</option>
                    </select>
                    <select name="status"  id="Categoy" onChange={handleInput}>
                        <option value="">Select Status</option>
                        <option value="In QC">In QC</option>
                        <option value="In Deployment">In Deployment</option>
                        <option value="On Hold">On Hold</option>
                    </select>

                    <input name="created" value={inputs.created} type="date" onChange={handleInput} />
                    <input name="due" value={inputs.due} type="date"  onChange={handleInput}/>
                </div>
                <input type="text"  name="mock_up" value={inputs.mock_up} placeholder='Mock Up' className='mock_up' onChange={handleInput} />
                <textarea name="notes" value={inputs.notes} id="" cols="100" rows="5" placeholder='Other Comments' onChange={handleInput}></textarea>
                <input type="submit" id='submit'/>
            </form>
            <hr className='hr1'/>

            {/* =============================TABLE SECTION ===================================== */}
            <h1 id='progress'>Tasks In Progress </h1>
            <table className='content_table'>
                <thead>
                    <tr>
                        <th>SL.NO</th>
                        <th>TASK NAME</th>
                        <th>CREATED</th>
                        <th>DUE</th>
                        <th>ASSIGNEE</th>
                        <th>CATEGORY</th>
                        <th>STATUS</th>
                        <th>JIRA ID</th>
                        <th>MOCK UP</th>
                        <th>NOTES</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                {
                    records.map((element,index)=>{
                        return(
                        
                        <tr>
                            <td>{index+1}</td>
                            <td>{element.task_name}</td>
                            <td>{element.created}</td>
                            <td>{element.due}</td>
                            <td>{element.assignee}</td>
                            <td>{element.category}</td>
                            <td>{element.status}</td>
                            <td>{element.jira_id}</td>
                            <td>{element.mock_up}</td>
                            <td>{element.notes}</td>
                            <td className='action'>
                                <div className="edit" onClick={()=>handleEdit(element.id)}>EDIT</div>
                                <div className="done">DONE</div>
                            </td>
                        </tr>
                    
                    )})
                }
                </tbody>
            </table>
        </div>
    )
}

export default Form
