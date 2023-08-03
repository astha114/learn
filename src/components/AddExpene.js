import React, {useState} from "react";
import './AddExpense.css';

function AddExpense(props){
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [cost, setCost] = useState('')

    const handleDate = (event) => {
        setDate(event.target.value)
    }

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleCost = (event) => {
        setCost(event.target.value)
    }

    const clickHandler = () => {
        const dataObj = {
            title: title,
            date: date,
            amount: cost
        }

        props.NewExpenseData(dataObj);
        setCost('')
        setDate('')
        setTitle('')
    }

    return (
        <>
            <div  className="card-adddata">
                <div className="frame">
                    <div className="title">
                        <h6 className="text-title">Title</h6>
                        <input value={title} onChange={handleTitle} className="textbox-date" type="text" />
                    </div>
                    <div className="cost">
                        <h6 className="text-title">Cost</h6>
                        <input value={cost} onChange={handleCost} className="textbox-date" type="text" />
                    </div>
                </div>
                <div className="frame1">
                    <div className="title">
                        <h6 className="text-title">Date</h6>
                        <input value={date} onChange={handleDate} className="textbox-date" type="text" />
                    </div>
                    <button onClick={clickHandler} className="button1">
                        <div className="add-to-list">Add to list</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddExpense