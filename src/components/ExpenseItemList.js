import React from 'react';
import ExpenseItem from './ExpenseItem';


function ExpenseItemList (props){
    const delItemId = (id)=>{
        const itemId = id;
        props.delItemId(itemId);
    }

    const updateTitle = (objData)=>{
        props.getData(objData);

    }


    return (
        <div>
        {
            props.data.map(item => {
                return <ExpenseItem key={item.id} id={item.id} title={item.title} date={item.date} amount={item.amount} getItemId={delItemId} updateData={updateTitle}/>
            })

        }
        </div>
    )
}

export default ExpenseItemList;