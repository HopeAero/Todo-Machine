import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="TodosLoading">
        <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    </div>
  );
}

export { TodosLoading };