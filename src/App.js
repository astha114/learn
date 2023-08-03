import { useState, useEffect } from "react";
import AddExpense from "./components/AddExpene";
import ExpenseItemList from "./components/ExpenseItemList";
import './components/App.css';
import graphics from './components/Graphics.png';

function App() {

    let [expenseData, setExpenseData] = useState([])
    const fetchData = () =>{
        fetch("http://localhost:3000/api/expenses")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
        })
        .then(data =>{
            setExpenseData(data)
        })
    }

    useEffect(()=>{

        fetchData();

    },[]);

   
    const expenseDataObj = (expenseDataEntered) => {
        
        fetch('http://localhost:3000/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseDataEntered),
        }).then((response) => {
            fetchData();
        })
    }
    
    const [delItemId, setDelItemId] = useState(0);
    const itemId = (id)=>{
        fetch(`http://localhost:3000/api/expenses/${id}`, {
            method: 'DELETE',
          })
            .then((response) => {
              if (response.ok) {
                console.log('Expense deleted successfully!');
              } else {
                console.error('Failed to delete expense');
              }
            })
            .then(data =>{
                fetchData();
            });

    }

    const dataUpdate = (dataObj)=>{
        const title =  dataObj.titleNew;
        fetch(`http://localhost:3000/api/expenses/${dataObj.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Title updated successfully!');
        } else {
          console.error('Failed to update title');
        }
      }).then(data =>{
        fetchData();
    });
     
    }

    
    return (
        <div className="desktop-1">
          <img className="graphics-icon" alt="" src={graphics} />
          <h1 className="daily-expense-tracker">BudgetBuddy</h1>
          <p className="subtitle">The ultimate expenditure tracking app designed to help you take control of your finances like never before.With our intuitive interface and powerful features, you can effortlessly track your expenses, set budgets, and gain valuable insights into your spending habits.</p>
          <AddExpense NewExpenseData={expenseDataObj} />
          <ExpenseItemList getData={dataUpdate} delItemId= {itemId} data={expenseData}/>
        </div>
    )
}

export default App;