import { useToyRobot, Direction } from '../hooks/useToyRobot';
import { SiProbot } from 'react-icons/si';
import { Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const position: Record<Direction, number> = {
  [Direction.NORTH]: 180,
  [Direction.EAST]: 90,
  [Direction.WEST]: 270,
  [Direction.SOUTH]: 0,
};

export const RobotIcon = () => {
  const { data } = useToyRobot();

  if (!data) return <></>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.3 }}>
      <Flex flexDirection='column' alignItems='center'>
        <motion.div
          initial={{ rotate: position[data.direction] }}
          animate={{ rotate: position[data.direction] }}
          transition={{ duration: 1 }}>
          <SiProbot color='white' size={50} />
        </motion.div>
        <Text color='white'>
          {data.x},{data.y},{data.direction}
        </Text>
      </Flex>
    </motion.div>
  );
};
