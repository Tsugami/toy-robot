import { Grid as ChakraGrid } from '@chakra-ui/react';

import React, { useMemo } from 'react';
import { generateGridArray } from '../lib/generateGridArray';

interface GridProps {
  numRows: number;
  numCols: number;
  renderCell: (row: number, col: number) => JSX.Element;
}

export const Grid = ({ numCols, numRows, renderCell }: GridProps) => {
  const gridArray = useMemo(() => generateGridArray(numRows, numCols), [numCols, numRows]);

  return (
    <ChakraGrid templateColumns={`repeat(${numCols}, 1fr)`}>
      {gridArray.map(({ numRow, numCol }, index) => (
        <React.Fragment key={numCol + numRow + index}>{renderCell(numRow, numCol)}</React.Fragment>
      ))}
    </ChakraGrid>
  );
};
