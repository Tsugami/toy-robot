import { GridItem as ChakraGridItem } from '@chakra-ui/react';
import { useMemo } from 'react';

interface GridItemProps {
  row: number;
  col: number;
}

export const GridItem = ({ row, col }: GridItemProps) => {
  const isPrimary = useMemo(() => (row % 2 === 0 ? col % 2 === 0 : col % 2 !== 0), [row, col]);

  return (
    <ChakraGridItem w='100%' h='100' bg={isPrimary ? 'blue.500' : 'cyan.500'}></ChakraGridItem>
  );
};
