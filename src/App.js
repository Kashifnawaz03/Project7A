import React from 'react';
import {initNotificaton} from './services/firebaseService';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
import './App.css';

function App() {
  return (
    <div>
     
     <button onClick={initNotificaton}>Notification</button>
     <GlobalProvider>
      <Header />
      <div className= 'container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
