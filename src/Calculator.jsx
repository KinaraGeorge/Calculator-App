import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Replace ÷ with / for division
        const expression = input.replace('÷', '/');
        setResult(evaluate(expression));
        setInput('');
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'CE') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <h1 className='text-3xl text-white p-3'>My Calculator</h1>
      <div className="w-full max-w-lg p-6 border border-gray-700 rounded-lg shadow-lg">
        <input
          type="text"
          className="w-full bg-gray-800 text-white text-right p-4 rounded-lg text-3xl mb-4"
          value={input || result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          {buttons.flat().map((value, index) => (
            <button
              key={index}
              className={`bg-gray-800 text-white rounded-lg p-6 text-xl hover:bg-gray-700 transition-all duration-200 ${
                value === '=' ? 'col-span-2 bg-blue-600 hover:bg-blue-500' : ''
              } ${value === '0' ? 'col-span-2' : ''}`}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const buttons = [
  ['C', 'CE', '÷', '*'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '.'],
  ['0', '='],
];

export default Calculator;
