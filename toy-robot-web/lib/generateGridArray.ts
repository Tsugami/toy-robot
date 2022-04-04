export const generateGridArray = (
  numRows: number,
  numCols: number,
): { numRow: number; numCol: number }[] => {
  const gridArray: { numRow: number; numCol: number }[] = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      gridArray.push({ numRow: row, numCol: col });
    }
  }
  return gridArray;
};
