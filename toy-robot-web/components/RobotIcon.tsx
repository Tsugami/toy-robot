import { useToyRobot, Direction } from '../hooks/useToyRobot';
import { SiProbot } from 'react-icons/si';
import { Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const position: Record<Direction, number> = {
  [Direction.NORTH]: 0,
  [Direction.EAST]: 90,
  [Direction.WEST]: 270,
  [Direction.SOUTH]: 180,
};

export const RobotIcon = () => {
  const { data } = useToyRobot();

  if (!data) return <></>;

  return (
    <Flex flexDirection='column' alignItems='center'>
      <motion.div animate={{ rotate: position[data.direction] }} transition={{ duration: 1 }}>
        <SiProbot color='white' size={70} />
      </motion.div>
      <Text color='white'>
        {data.x},{data.y},{data.direction}
      </Text>
    </Flex>
  );
};
