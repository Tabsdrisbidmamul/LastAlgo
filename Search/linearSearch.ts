function linearSearch(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
    continue;
  }

  return false;
}

const arr = [1, 2, 3, 4];

console.log(linearSearch(arr, 3));
