/**
 * Let's keep swapping and 
 * move the largest element 
 * to the last position
 */

export default function bubbleSort(arr: number[]): void {
  const n = arr.length
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        swapIt(arr, j)
      }
    }
  }
}

function swapIt(arr: number[], j: number): void {
  arr[j + 1] = arr[j] + arr[j + 1]
  arr[j] = arr[j + 1] - arr[j]
  arr[j + 1] = arr[j + 1] - arr[j]
}