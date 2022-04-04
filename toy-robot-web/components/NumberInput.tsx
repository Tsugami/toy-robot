import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
} from '@chakra-ui/react';
import { useField } from 'formik';

interface NumberInputProps {
  id: string;
  isRequired?: boolean;
  max?: number;
  min?: number;
}

export const NumberInput = ({ id, isRequired, max, min }: NumberInputProps) => {
  const [field] = useField(id);

  return (
    <FormControl isRequired={isRequired}>
      <ChakraNumberInput w='20' max={max} min={min}>
        <NumberInputField id={id} {...field} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </FormControl>
  );
};
