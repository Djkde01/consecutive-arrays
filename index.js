/*
[1, 2, 3, 2, 4, 5, 6, 7] Eliminar 1 número cumple la condición.
[1, 2, 2, 2, 4, 5, 6, 7] Eliminar 1 número no cumple la condición. ( 2 < 2 ) = false
[1, 2, 3, 1, 1, 4, 8, 9] Eliminar 1 número no cumple la condición.
[1, 2, 3, 4, 5, 6, 7, 9] Cumple la condición sin necesidad de eliminar alguno
*/

const checkConsecutive = (numbersArray) => {
  let previousNumber = 0;
  let timesRemoved = 0;
  const result = {
    isConsecutive: true,
    array: [],
  };

  for (i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > previousNumber) {
      result.array.push(numbersArray[i]);
      previousNumber = numbersArray[i];
    } else {
      if (timesRemoved === 0) {
        timesRemoved += 1;
      } else {
        result.isConsecutive = false;
        result.array = numbersArray;
        i = numbersArray.length;
      }
    }
  }
  return result;
};

module.exports = checkConsecutive;
