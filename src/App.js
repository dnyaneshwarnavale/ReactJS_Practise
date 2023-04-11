import './App.css';
import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

//function App() { // function declartion this way ... below is second way for declare function
const App= () =>{   // another way to write function
  const expenses=[
    {id: 'e1', title: 'Toilet Paper',amount:94.12, date: new Date(2021,1,10)},
    {id: 'e2', title: 'New TV',amount:940.12, date: new Date(2022,2,10)},
    {id: 'e3', title: 'Car Insurance',amount:5000.12, date: new Date(2022,3,10)},
    {id: 'e4', title: 'New Desk (wooden)',amount:300.12, date: new Date(2023,4,10)},

  ];
 const addExpenseHandler = expenses=> {
   console.log('In App.js');
   console.log(expenses);
 };

  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items= {expenses} />
    </div>
  );

  // alternative way - write in React just pass 3 element to createElement - create one main element & other are child element

  //return React.createElement(
   // 'div',{},  // div 
    //React.createElement('h2',{},"Let\'s get started") , // h2 element
    //React.createElement(Expenses, {items: expenses}) // expenses class
    //);
}

export default App;
