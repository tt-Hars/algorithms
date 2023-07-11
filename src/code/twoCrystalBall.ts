/**
 * trying to find when the two crystal balls
 * will break when dropped from a floor.
 * hint: if you dont want to move linear, sq. root it!
 */

export default function twoCrystalBalls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length))
  let i = jmpAmount
  for (; i < breaks.length - 1; i += jmpAmount) {
    if (breaks[i]) break
  }

  i -= jmpAmount

  for (let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) return i
  }
  return -1
}
