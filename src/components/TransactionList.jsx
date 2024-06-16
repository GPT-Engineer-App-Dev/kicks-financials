import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TransactionList = ({ transactions, editTransaction, deleteTransaction }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>
                <button 
                  className="btn btn-sm btn-warning mr-2" 
                  onClick={() => editTransaction(transaction)}
                >
                  <FaEdit />
                </button>
                <button 
                  className="btn btn-sm btn-error" 
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;