import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import './SortedNumbers.css'

function SortedNumbers({ unsorted, sorted }) { //we're animating from unsorted to sorted


    const [displayedNumbers, setDisplayedNumbers] = useState(unsorted)

    const largest = displayedNumbers.reduce((accumulatedValue, nextValue) => nextValue > accumulatedValue ? nextValue : accumulatedValue, 0)
    //[1, 2, 3, 4, 5] => 15 reduce () applies a accumulative value to all elements in the array, and returns the final result.

    function getHeightPercentage(value, largest){
        return value / largest * 100;
    }


    useEffect(()=>{
        if (sorted){

        
        const handle = setTimeout(()=> setDisplayedNumbers(sorted), 2000); //after 2 seconds the sorted numbers will be displayed
        return ()=> clearTimeout(handle) //clears the timeout
        }
    }, [sorted])



  return (
    <div className="sortOutputContainer">
        {/* {sortedNumbers.join(",")} */}
        {
        displayedNumbers.map(number => <motion.div layout className="bar" key={number} style={{height: getHeightPercentage(number, largest) + "%"}}>
        </motion.div>)} 
    </div>
  )
}

export default SortedNumbers

//wraps our divs with everything the library needs to animate