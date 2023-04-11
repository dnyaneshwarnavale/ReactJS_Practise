import React,{useState} from 'react'; // useState allwos values as state and changed values are reflict
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//function ExpenseItem( props){
const ExpenseItem =(props)=>{

  
    const [title, setTitle] =useState(props.title); // call in such function not call in nested function
    console.log('ExpenseItem evaluated by React');
    
    const clickHandler =() =>{
      setTitle('Updated');  // special type of func is not just argument
      console.log(title);
    };

   return (
        <Card className="expense-item">
         <ExpenseDate date={props.date} /> 
          <div className="expense-item__description">
            <h2>{title}</h2>
             <div className="expense-item__price">${props.amount}</div>
         </div>
        <button onClick={clickHandler}>Change Title </button>

         </Card>
    );
}

export default ExpenseItem;