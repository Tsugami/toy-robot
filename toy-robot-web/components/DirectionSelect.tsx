import { FormControl, Select } from '@chakra-ui/react';
import { Field, useField } from 'formik';
import { Direction } from '../hooks/useToyRobot';

interface DirectionSelectProps {
  id: string;
  isRequired?: boolean;
}

export const DirectionSelect = ({ id, isRequired }: DirectionSelectProps) => {
  const [field] = useField(id);

  return (
    <FormControl isRequired={isRequired}>
      <Select placeholder='--' w='90%' id={id} {...field}>
        <option value={Direction.EAST}>{Direction.EAST}</option>
        <option value={Direction.NORTH}>{Direction.NORTH}</option>
        <option value={Direction.SOUTH}>{Direction.SOUTH}</option>
        <option value={Direction.WEST}>{Direction.WEST}</option>
      </Select>
    </FormControl>
  );
};
