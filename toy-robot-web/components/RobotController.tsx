import { Button, Center, Container, Flex, Wrap } from '@chakra-ui/react';
import { useToyRobot } from '../hooks/useToyRobot';

import { PlaceCommand } from './PlaceCommand';

export const RobotController = () => {
  const { moveForward, turnLeft, turnRight } = useToyRobot();

  return (
    <Container>
      <PlaceCommand />
      <Center justifyContent='space-around' mb='3'>
        <Button onClick={turnLeft}>LEFT</Button>
        <Button onClick={turnRight}>RIGHT</Button>
        <Button onClick={moveForward}>MOVE</Button>
      </Center>
    </Container>
  );
};
