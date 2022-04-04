import { useToyRobot } from '../hooks/useToyRobot';
import { SiProbot } from 'react-icons/si';
import { Text, Flex } from '@chakra-ui/react';

export const RobotIcon = () => {
  const { data } = useToyRobot();

  if (!data) return;

  return (
    <Flex flexDirection='column' alignItems='center'>
      <SiProbot color='white' size={70} />
      <Text color='white'>
        {data.x},{data.y},{data.direction}
      </Text>
    </Flex>
  );
};
