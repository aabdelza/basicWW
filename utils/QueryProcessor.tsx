export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id")) {
    return (
      "aabdelza, Abdulraouf Aboubakr" +
      "Football player, Programmer" +
      "From Qatar"
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "aabdelza"
    );
  }

  const additionMatch = query.match(/what is (\d+) plus (\d+)\?/i);
  if (additionMatch) {
    const sum = parseInt(additionMatch[1], 10) + parseInt(additionMatch[2], 10);
    return sum.toString();
  }

  // Check for largest number query
  const largestNumberMatch = query.match(/which of the following numbers is the largest: ([\d, ]+)\?/i);
  if (largestNumberMatch) {
    const numbers = largestNumberMatch[1].split(', ').map(Number);
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }
// 

const squareAndCubeMatch = query.match(/which of the following numbers is both a square and a cube: ([\d, ]+)\?/i);
  if (squareAndCubeMatch) {
    const numbers = squareAndCubeMatch[1].split(', ').map(Number);
    const squareAndCube = numbers.find(num => {
      const root = Math.cbrt(num);
      return Number.isInteger(root) && Math.sqrt(num) === root;
    });
    return squareAndCube !== undefined ? squareAndCube.toString() : "No number satisfies the condition.";
  }


  return "";
}
