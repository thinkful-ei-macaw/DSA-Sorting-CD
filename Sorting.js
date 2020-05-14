
//Drill 1. Understanding merge sort.
// input: 21,    1,    26,   45,     29,    28,    2,    9,    16,    49,    39,    27,    43,    34,    46,    40
// 1.1)
// scenario: What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// output: [21, 1] , [26, 45] , [29, 28, 2, 9] , [16, 49, 39, 27, 43, 34, 46, 40]

// 1.2)
// scenario: What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// output1: [21], [1], [26], [45], [29], [28], [2,9], [16, 49, 39, 27, 43, 34, 46, 40] --> I think this one is correct (this assumes that even the calls at the leaf nodes count as recursive calls even though   they just hit the base case and return)
// output2: [1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]? --> This assumes that when you get to 21 and it calls the recusive call doesn't actually count when it hits the base case, this seems stupid now that I type it out lol.

// 1.3)
// scenario: What are the first 2 lists to be merged?
// output: The first two lists to be merged are [21] and [1] (merged to [1, 21]);

// 1.4)
// scenario: Which two lists would be merged on the 7th merge?
// output: [1, 21, 26, 45] and [2, 9, 28, 29] to equal [1, 2, 9, 21, 26, 28, 29, 45]

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

// Drill 2. Understanding Quicksort

// 1.1) 
// output: 3, 9, 1, 14, 17, 24, 22, 20
/** 
 scenario:  Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

The pivot could have been either 14 or 17 ---> This is the answer.

*/

// 1.2)
// input: 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
/**scenario: show the resulting list after the second partitioning according to the quicksort algorithm.

When using the last item on the list as a pivot
When using the first item on the list as a pivot */

// output: last: [3, 9, 10,  12, 19, 14, 17, 16, 13, 15]
//         first: [14, 13, 10, 3, 9. 12, 15, 16, 19, 17]

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// Drill 3. Implementing Quicksort

// console.log(quickSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]));

// Drill 4. Implementing merge sort

// console.log(mergeSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]));

// Drill 5. Sorting a linked list using merge sort

// Drill 6. Bucket Sort

// we get an unsorted array of integers and we are required to sort the array using an algorithm that we write (not .sort() and not allowed to use .splice(), .shift() or .unshift()). We know the highest and lowest values.

function bucketSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

}

const array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

// console.log(array.sort(function compareNumbers(a, b) {
//   return a - b;
// }))
console.log(bucketSort([[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]]))


// Drill 7. Sort in place

