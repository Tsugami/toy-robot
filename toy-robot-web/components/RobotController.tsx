import { Button, Center, Container, Flex, Wrap } from '@chakra-ui/react';

import { PlaceCommand } from './PlaceCommand';

export const RobotController = () => {
  return (
    <Container>
      <PlaceCommand />
      <Center justifyContent='space-around' mb='3'>
        <Button>LEFT</Button>
        <Button>RIGHT</Button>
        <Button>MOVE</Button>
      </Center>
    </Container>
  );
};
