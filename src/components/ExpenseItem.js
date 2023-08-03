import React, {useState} from 'react';
import './ExpenseItem.css';

function ExpenseItem(props){
    const [newTitle, setNewTitle] = useState('') 
    const [Title, setTitle] = useState(props.title) 

    const handleChange = (event)=>{
        setNewTitle(event.target.value);
    }

    const handleClick = (event)=>{
        setTitle(newTitle)
        const obj = {
            id: event.target.id,
            titleNew: newTitle
        }
        props.updateData(obj) 
        
    }

    const deleteHandler = (event) =>{
        props.getItemId(event.target.id);
    }
    return (
        
        <div className="item">
            <button id={props.id} onClick={handleClick} className="button">
                <div className="update">UPDATE</div>
            </button>
            <h6 className="titlecost" >
                {Title}<div className='tag'>({props.amount})</div>
            </h6>
            <h6 className="date" >
                {props.date}
            </h6>
            <input value={newTitle} onChange={handleChange} className="textarea" type="text" />
            <button className="close-button">
                <div className="close-button-child" />
                <div onClick={deleteHandler} id={props.id}  className="x">X</div>
            </button>
        </div>
        
    );

}

export default ExpenseItem;