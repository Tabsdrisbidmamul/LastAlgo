function crystalBall(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  console.log('jumpAmount ', jumpAmount);

  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
    console.log('IN LOOP: i ', i);
    if (breaks[i]) {
      console.log("IN LOOP: we're in i ", i);
      break;
    }
  }

  i -= jumpAmount;

  console.log('i after minus ', i);

  for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    console.log('IN LOOP i ', i);
    console.log('IN LOOP j ', j);
    if (breaks[i]) {
      console.log("IN LOOP: we're in i ", i);
      console.log("IN LOOP: we're in j ", j);
      return i;
    }
  }

  return -1;
}

const arr = [false, false, false, true, false, false, true];

console.log(crystalBall(arr));
