import React from 'react';
// import Budget from './components/Budget.js'
import Remaining from './components/Remaining.js'
import ExpenseTotal from './components/ExpenseTotal.js'
import ExpenseItem from './components/ExpenseList.js'
import ExpenseList from './components/ExpenseList.js'
import AllocationFrom from './components/AllocationForm.js'

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                             <div className='col-sm'>
                             <Budget />
                             </div>
                        }        

                        {
                            /* Add Remaining component here*/
                            <div className='col-sm'>
                            <Remaining />
                            </div>
                        }        

                        {
                         //ExpenseTotal component
                        <div className='col-sm'>
                        <ExpenseTotal />
                        </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            <div> <ExpenseList /> </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                            <div> <ExpenseItem /> </div>
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div> <AllocationFrom /> </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
