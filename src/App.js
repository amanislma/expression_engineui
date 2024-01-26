// src/App.js
import React, { useState } from 'react';
import Expression from './Expression';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [connectorType, setConnectorType] = useState('AND');
  const [expressions, setExpressions] = useState([{ key: 'Age', operator: '>', value: '', score: '' }]);
  const [jsonOutput, setJsonOutput] = useState(null);

  const handleConnectorChange = (value) => {
    setConnectorType(value);
  };

  const handleExpressionChange = (index, field, value) => {
    const newExpressions = [...expressions];
    newExpressions[index][field] = value;
    setExpressions(newExpressions);
  };

  const handleAddExpression = () => {
    const newExpressions = [...expressions, { key: 'Age', operator: '>', value: '', score: '' }];
    setExpressions(newExpressions);

    // Generate JSON output and store it in the state
    const output = {
      connectorType,
      expressions: newExpressions,
    };
    setJsonOutput(output);

    // Log JSON output
    console.log(JSON.stringify(output, null, 2));
  };

  const handleDeleteExpression = (index) => {
    const newExpressions = [...expressions];
    newExpressions.splice(index, 1);
    setExpressions(newExpressions);

    // Generate JSON output and store it in the state
    const output = {
      connectorType,
      expressions: newExpressions,
    };
    setJsonOutput(output);

    // Log JSON output
    console.log(JSON.stringify(output, null, 2));
  };

  return (
    <div className="app">
      <div className="form-group">
        <label className="label">Connector Type:</label>
        <select className="select" value={connectorType} onChange={(e) => handleConnectorChange(e.target.value)}>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </div>
      <div>
        <h2>Expressions:</h2>
        {expressions.map((expression, index) => (
          <Expression
            key={index}
            expression={expression}
            onChange={(field, value) => handleExpressionChange(index, field, value)}
            onDelete={() => handleDeleteExpression(index)}
          />
        ))}
        <button className="add-btn" onClick={handleAddExpression}>
          Add Expression
        </button>
      </div>
      {jsonOutput && (
        <div className="form-group">
          <label className="label">JSON Output:</label>
          <pre>{JSON.stringify(jsonOutput, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
