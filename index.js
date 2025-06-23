// Code your solution in this file!
// 1. Returns number of blocks from HQ (located at 42nd street)
function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  return Math.abs(someValue - hq);
}

// 2. Converts blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// 3. Calculates feet traveled between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4. Calculates fare price based on feet traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
