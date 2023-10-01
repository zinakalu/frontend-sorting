import React, { useState } from "react";

function SortInput({ onSort }) {
  const [numberList, setNumberList] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubble_sort");

  function onSortclicked() {
    console.log(numberList);
    console.log(algorithm);
    onSort(numberList, algorithm);
  }

  function onNumbersChanged(e) {
    const value = e.target.value;
    const newNumberList = value.split(",").map((val) => parseInt(val));
    setNumberList(newNumberList);
  }

  function onAlgorithmChanged(e) {
    setAlgorithm(e.target.value);
  }

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <>
      <h3>Choose from a range of sorting algorithms!</h3>
      <input
        id="unsortedNumbers"
        type="text"
        placeholder="Enter list of numbers"
        onChange={onNumbersChanged}
      ></input>
      <select id="sortAlgorithm" onChange={onAlgorithmChanged}>
        <option value="bubble_sort">Bubble sort</option>
        <option value="merge_sort">Merge sort</option>
        <option value="quick_sort">Quick sort</option>
        <option value="insertion_sort">Insertion sort</option>
        <option value="selection_sort">Selection sort</option>
      </select>
      <button onClick={onSortclicked}>Sort!</button>

      <div className="scrollDownArrow" onClick={scrollToBottom}></div>
    </>
  );
}

export default SortInput;
