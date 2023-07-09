function bubbleSort(values: number[]): void {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - 1 - i; j++) {
      if (values[j] > values[j + 1]) {
        const tmp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = tmp;
      }
    }
  }
}

const arr = [1, 2, 3, 7, 4];

bubbleSort(arr);
console.log(arr);
