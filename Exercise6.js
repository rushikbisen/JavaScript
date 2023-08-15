Practice:
Question 1:
Write a JavaScript program to find the second shortest number in the array.
Example Input (4,1,2,3]

function SecondShortestNumber(arr) {
    var  firstShortest = Infinity;
    var secondShortest = Infinity;
    for ( i = 0; i < arr.length; i++) {
      if (arr[i] < firstShortest) {
        secondShortest = firstShortest;
        firstShortest = arr[i];
      } else if (arr[i] < secondShortest && arr[i] !== firstShortest) {
        secondShortest = arr[i];
      }
    }
    if (secondShortest === Infinity) {
      return "ONly one num is present";
    } else {
      return `Second shortest number = ${secondShortest}`;
    }
  }
  console.log(SecondShortestNumber([4, 1, 2, 3])); 

Question 2:
Write a JavaScript program that checks two arrays are equal or not i.e. All elements when compared in two arrays are equal and the indexes of elements in two arrays are same.
Example Input
arrayl-(1,2,3,4)   array2= [1,2,3,4]

function equalArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  var arr1 = [1, 2, 3, 4];
  var arr2 = [1, 3, 2, 4];
  console.log(equalArrays(arr1, arr2)); 
  console.log(equalArrays(arr1, arr2));

  Question 3:
  Write a JavaScript program to add two arrays, the final array should only contain unique numbers.
  Example Input
  array1=[1,2,3,4]
  array2- [3,4,5,6]

function uniqueNumberArray(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if (!result.includes(arr2[i])) {
        result.push(arr2[i]);
      }
    }
    return result;
  }
  var arr1 = [1, 2, 3, 4];
  var arr2 = [3, 4, 5, 6];
  console.log(uniqueNumberArray(arr1,arr2));