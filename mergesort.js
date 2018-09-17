function split(wholeArray) {
  // if(wholeArray.length === 1) {
  //   return [wholeArray];
  // }
  let mid = Math.floor(wholeArray.length/2);
  let firstHalf = wholeArray.slice(0, mid);
  let secondHalf = wholeArray.slice(mid);
  return [firstHalf, secondHalf];
 }

 function merge(firstArray, secondArray) {
  let sortedArray = [];
  let firstPointer = 0;
  let secondPointer = 0;

  while (secondPointer + firstPointer !== firstArray.length + secondArray.length) {
    if (firstArray[firstPointer] < secondArray[secondPointer]) {
      sortedArray.push(firstArray[firstPointer++]);
    } else {
      sortedArray.push(secondArray[secondPointer++]);
    }
  }
  return sortedArray;
 }

 function mergeSort(array) {
  //base case: if 1-element array, return element
  if (array.length < 2) {
    return array;
  }
  else {
    //debugger;
    let left = split(array)[0];
    console.log(left);
    let right = split(array)[1];
    return merge(mergeSort(left), mergeSort(right));
  }
 }
