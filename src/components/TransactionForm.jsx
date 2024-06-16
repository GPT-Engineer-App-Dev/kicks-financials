import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Nike');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ date, amount: parseFloat(amount), type, category });
    setDate('');
    setAmount('');
    setType('expense');
    setCategory('Nike');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-secondary">Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="input input-bordered w-full"
          required 
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-secondary">Amount</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          className="input input-bordered w-full"
          required 
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-secondary">Type</label>
        <select 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          className="select select-bordered w-full"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1 text-secondary">Category</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="select select-bordered w-full"
        >
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Reebok">Reebok</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-full">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;