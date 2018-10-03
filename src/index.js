module.exports = function longestConsecutiveLength(array) {
  let result = 0;
  const map = new Map();

  for (const item of array) {

    if (map.has(item)) {
      continue;
    }

    const left = map.has(item - 1) ? map.get(item - 1) : item;
    const right = map.has(item + 1) ? map.get(item + 1) : item;

    if (right - left + 1 > result) {
      result = right - left + 1;
    }

    map.set(left, right);
    if (left !== right) {
      map.set(right, left);
    }

    if (left !== item && right !== item) {
      map.set(item, 0);
    }
  }

  return result;
}
