import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-10-01', amount: 200, type: 'expense', category: 'Nike' },
    { id: 2, date: '2023-10-05', amount: 150, type: 'expense', category: 'Adidas' },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: transactions.length + 1 }]);
  };

  const editTransaction = (updatedTransaction) => {
    setTransactions(transactions.map(t => t.id === updatedTransaction.id ? updatedTransaction : t));
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Sneaker Purchase Tracker</h1>
        <p className="text-lg">Track your sneaker purchases easily and efficiently.</p>
      </header>
      <main>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList 
          transactions={transactions} 
          editTransaction={editTransaction} 
          deleteTransaction={deleteTransaction} 
        />
      </main>
    </div>
  );
}

export default App;