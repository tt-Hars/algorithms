function asteroidCollision(asteroids) {
  let result = []
  const positives = asteroids.filter(item => item > 0).reverse()
  const negatives = asteroids.filter(item => item < 0).reverse()
  let i = 0
  while(i < asteroids.length) {
    console.log(positives[i], negatives[i])
    if(positives[0] <= Math.abs(negatives[0])){
      positives.shift()
    } else if(positives[0] > Math.abs(negatives[0])) {
      negatives.shift()
    } else {
      // positives.shift()
       // negatives.shift()
    }
    if(positives[0] && !negatives[0]) {
      result = [...positives]
      break
    }
    if(!positives[0] && negatives[0]) {
      result = [...positives]
      break
    }
    if(!positives[0] && !negatives[0]) {
      break
    }
    i++
  }
  console.log([...result].reverse())
  return result.reverse()
};

asteroidCollision([-2,-1,1,2])