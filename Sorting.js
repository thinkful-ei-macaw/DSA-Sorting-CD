
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
};

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
};

