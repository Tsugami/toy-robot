import { DataRobot, useToyRobot } from '../hooks/useToyRobot';

import { GridItem as ChakraGridItem } from '@chakra-ui/react';
import { useMemo } from 'react';
import { RobotIcon } from './RobotIcon';

interface GridItemProps {
  row: number;
  col: number;
}

export const GridItem = ({ row, col }: GridItemProps) => {
  const { data } = useToyRobot();
  const isPrimaryColor = useMemo(() => (row % 2 === 0 ? col % 2 === 0 : col % 2 !== 0), [row, col]);
  const isRobot = useMemo(() => data?.x === col && data?.y === row, [data, col, row]);

  return (
    <ChakraGridItem
      w='100%'
      h='100'
      bg={isPrimaryColor ? 'blue.500' : 'cyan.500'}
      display='flex'
      justifyContent='center'
      alignItems='center'>
      {isRobot && <RobotIcon />}
    </ChakraGridItem>
  );
};
