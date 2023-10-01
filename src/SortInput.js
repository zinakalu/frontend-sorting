import React, { useState } from 'react'
//this component collects input from user 
function SortInput({onSort}) {
    const [numberList, setNumberList] = useState([])
    const [algorithm, setAlgorithm] = useState("bubble_sort")

    function onSortclicked(){
        // /sorting/{sortAlgorithm}
        console.log(numberList)
        console.log(algorithm)
        onSort(numberList, algorithm)
    }

    function onNumbersChanged(e){
        const value = e.target.value // "1,2,3,4,5" this is a string what we want is ["1", "2", "3", "4", "5"] => [1,2,3,4,5]. this is the next line
        const newNumberList = value.split(",").map(val => parseInt(val)) //the map function loops through each element and converts them to integers
        setNumberList(newNumberList) //updates the state to [1,2,3,4,5]
    }

    function onAlgorithmChanged(e){
        setAlgorithm(e.target.value)
    }



  return (
    <>
    <input id="unsortedNumbers" type="text" placeholder='Enter list of numbers' onChange={onNumbersChanged} ></input> 
    <select id="sortAlgorithm" onChange={onAlgorithmChanged}>
        <option value="bubble_sort">Bubble sort</option>
        <option value="merge_sort">Merge sort</option>
        <option value="quick_sort">Quick sort</option>
        <option value="insertion_sort">Insertion sort</option>
        <option value="selection_sort">Selection sort</option>
        
    </select>
    <button onClick={onSortclicked}>Sort!</button>
    </>
  )
}

export default SortInput