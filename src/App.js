
import React, { useState } from'react';
import './App.css';
import SortedNumbers from './SortedNumbers';
import SortInput from './SortInput';

function App() {
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [unsortedNumbers, setUnsortedNumbers] = useState([]);

  function onSort(numberList, algorithm) {
    console.log(numberList, algorithm);
    setUnsortedNumbers(numberList);
    fetch(`/sorting/${algorithm}`,{ 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(numberList)})

    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSortedNumbers(data)
    })
  }

  return (
    <div className="App">
    <SortedNumbers unsorted={unsortedNumbers} sorted={sortedNumbers}/>

    <SortInput onSort={onSort} />

    </div>
  );
}

export default App;
