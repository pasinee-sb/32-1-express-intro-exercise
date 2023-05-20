const { notDeepStrictEqual } = require("assert");

function mean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

function mode(arr) {
  const frequencyMap = arr.reduce(function (map, num) {
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  const maxCount = Math.max(...Object.values(frequencyMap));
  const mode = Object.keys(frequencyMap).filter(
    (key) => frequencyMap[key] === maxCount
  );

  return mode;
}

function median(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    const median1 = sortedArr[middleIndex - 1];
    const median2 = sortedArr[middleIndex];
    return (median1 + median2) / 2;
  } else {
    return sortedArr[middleIndex];
  }
}

module.exports = { mean, mode, median };
