function binarySearch(values: number[], toFind: number): boolean {
  let low = 0;
  let high = values.length;

  do {
    const midpoint = Math.floor(low + (high - low) / 2);
    const value = values[midpoint];

    if (value === toFind) {
      return true;
    } else if (value < toFind) {
      low = midpoint + 1;
    } else {
      high = midpoint;
    }
  } while (low < high);

  return false;
}

const arr = [1, 2, 3, 4, 5];

console.log(binarySearch(arr, 5));
