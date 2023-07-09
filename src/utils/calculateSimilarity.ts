type ScoringScheme = {
  match?: number;
  mismatch?: number;
  gap?: number;
};

const substitutionScore =
  (input: string, target: string, match: number, mismatch: number) =>
  (inputIdx: number, targetIdx: number) =>
    input.charAt(inputIdx).toLowerCase() ===
    target.charAt(targetIdx).toLowerCase()
      ? match
      : mismatch;

// copy elements of array target to copy, THIS FUNCTION ASSUMES LENGTH OF COPY AND TARGET ARE THE SAME.
function copyArrayElement<T = unknown>(arrayToCopy: T[], target: T[]): void {
  arrayToCopy.forEach((el, idx) => {
    target[idx] = el;
  });
}

/**
 * calculate similarity between two strings using Smith–Waterman algorithm.
 * @param input
 * @param target
 * @param param2
 * @see {@link https://en.wikipedia.org/wiki/Smith%E2%80%93Waterman_algorithm} for more info.
 * @returns
 */
function calculateSimilarity(
  input: string,
  target: string,
  { match = 1, mismatch = -2, gap = -0.5 }: ScoringScheme = {}
): number {
  if (input.length === 0 && target.length === 0) return 1;

  if (input.length === 0 || target.length === 0) return 0;

  const targetLength = target.length;
  let maxScore = 0;
  const getSubScore = substitutionScore(input, target, match, mismatch);

  const v0 = Array<number>(targetLength).fill(0);
  const v1 = Array<number>(targetLength).fill(0);

  // src: https://datascience.stackexchange.com/questions/12568/smith-waterman-gotoh-algorithm-how-to-determine-an-overall-similarity-percenta
  const maxDistance =
    Math.min(input.length, target.length) * Math.max(match, gap);

  /*
    Start from the second row and column of the matrix (ignore the zero padding on first row and column) and keep track of the maximum score.
    see: https://en.wikipedia.org/wiki/Levenshtein_distance#Iterative_with_two_matrix_rows
  */

  // Init v0. Only check the left diagonal & left since first row of matrix is always zero, hence left >= top.
  for (let i = 0; i < targetLength; i++) {
    v0[i] = Math.max(i === 0 ? gap : v0[i - 1] + gap, getSubScore(0, i), 0);
    maxScore = Math.max(maxScore, v0[i]);
  }

  /*
    Do the rest of the algorithm.
    - Fill first element of v1 first, check top and left diagonal since first column of matrix is always zero. hence top >= left.
    - Fill the rest of v1 by checking left, top, and left diagonal.
    - copy elements of v1 to v0.
    - repeat.
  */
  for (let i = 1; i < input.length; i++) {
    // only check top and diagonal left
    v1[0] = Math.max(v0[0] + gap, getSubScore(i, 0), 0);

    maxScore = Math.max(maxScore, v1[0]);

    for (let j = 1; j < targetLength; j++) {
      v1[j] = Math.max(
        v1[j - 1] + gap,
        v0[j] + gap,
        v0[j - 1] + getSubScore(i, j),
        0
      );
      maxScore = Math.max(maxScore, v1[j]);
    }

    copyArrayElement(v1, v0);
  }

  return maxScore / maxDistance;
}

// function calculateDissimilarity(
//   firstString: string,
//   secondString: string
// ): number {
//   //  immediately return 0 if both strings are empty strings
//   const maxStringLength = Math.max(firstString.length, secondString.length);
//   if (maxStringLength === 0) return 0;

//   const rowLength = firstString.length + 1;
//   const columnLength = secondString.length + 1;
//   const matrix = Array<number>(rowLength)
//     .fill(0)
//     .map((_, i) =>
//       Array(columnLength)
//         .fill(0)
//         .map((_, j) => (i === 0 ? j : j === 0 ? i : 0))
//     );

//   for (let i = 1; i < rowLength; i++) {
//     for (let j = 1; j < columnLength; j++) {
//       const left = matrix[i][j - 1] + 1;
//       const top = matrix[i - 1][j] + 1;
//       const isCharEqual =
//         firstString.charAt(i - 1).toLowerCase() ===
//         secondString.charAt(j - 1).toLowerCase();
//       const diagonalLeft = matrix[i - 1][j - 1] + (isCharEqual ? 0 : 1);
//       matrix[i][j] = Math.min(left, top, diagonalLeft);
//     }
//   }

//   return matrix[rowLength - 1][columnLength - 1] / maxStringLength;
// }

export default calculateSimilarity;
