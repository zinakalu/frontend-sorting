import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SortedNumbers.css";

function SortedNumbers({ unsorted, sorted }) {
  const [displayedNumbers, setDisplayedNumbers] = useState(unsorted);

  const largest = displayedNumbers.reduce(
    (accumulatedValue, nextValue) =>
      nextValue > accumulatedValue ? nextValue : accumulatedValue,
    0
  );

  function getHeightPercentage(value, largest) {
    return (value / largest) * 100;
  }

  useEffect(() => {
    if (sorted) {
      const handle = setTimeout(() => setDisplayedNumbers(sorted), 1000);
      return () => clearTimeout(handle);
    }
  }, [sorted]);

  return (
    <div className="sortOutputContainer">
      <AnimatePresence>
        {displayedNumbers.map((number) => (
          <motion.div
            layout
            initial={{ opacity: 0, height: "0%" }} // Initial state
            animate={{
              opacity: 1,
              height: getHeightPercentage(number, largest) + "%",
            }}
            exit={{ opacity: 0, height: "0%" }}
            className="bar"
            key={number}
          ></motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default SortedNumbers;
