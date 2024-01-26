// src/components/Expression.js
import React from 'react';

const Expression = ({ expression, onChange, onDelete }) => {
  return (
    <div className="expression">
      <select
        value={expression.key}
        onChange={(e) => onChange('key', e.target.value)}
      >
        <option value="Age">Age</option>
        <option value="CreditScore">Credit Score</option>
        <option value="AccountBalance">Account Balance</option>
      </select>
      <select
        value={expression.operator}
        onChange={(e) => onChange('operator', e.target.value)}
      >
        <option value=">">{'>'}</option>
        <option value="<">{'<'}</option>
        <option value=">=">{'>='}</option>
        <option value="<=">{'<='}</option>
        <option value="=">{'='}</option>
      </select>
      <input
        type="text"
        value={expression.value}
        onChange={(e) => onChange('value', e.target.value)}
      />
      <input
        type="text"
        value={expression.score}
        onChange={(e) => onChange('score', e.target.value)}
      />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Expression;
