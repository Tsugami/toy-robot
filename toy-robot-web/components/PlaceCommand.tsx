import { Button, Flex, Spacer } from '@chakra-ui/react';
import { DirectionSelect } from './DirectionSelect';
import { NumberInput } from './NumberInput';

export const PlaceCommand = () => {
  return (
    <Flex flexDirection='column' m='3'>
      <Flex gap='3' mb='2'>
        <NumberInput />
        <NumberInput />
        <DirectionSelect />
      </Flex>
      <Button>PLACE</Button>
    </Flex>
  );
};
