import { Button, Flex, Spacer } from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { Direction, useToyRobot } from '../hooks/useToyRobot';
import { DirectionSelect } from './DirectionSelect';
import { NumberInput } from './NumberInput';
import * as Yup from 'yup';

export const PlaceCommand = () => {
  const { areaHeight, areaWidth } = useToyRobot();
  const formik = useFormik({
    initialValues: {
      x: '',
      y: '',
      direction: '',
    },
    onSubmit: (values) => console.log(values),
    validationSchema: makeSchema(areaWidth, areaHeight),
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Flex flexDirection='column' m='3'>
          <Flex gap='3' mb='2'>
            <NumberInput id='x' isRequired max={areaWidth} min={0} />
            <NumberInput id='y' isRequired max={areaHeight} min={0} />
            <DirectionSelect id='direction' isRequired />
          </Flex>
          <Button type='submit'>PLACE</Button>
        </Flex>
      </Form>
    </FormikProvider>
  );
};

const makeSchema = (maxX: number, maxY: number) =>
  Yup.object().shape({
    x: Yup.number().min(0).max(maxX).required(),
    y: Yup.number().min(0).max(maxY).required(),
    direction: Yup.string()
      .required()
      .oneOf([Direction.EAST, Direction.NORTH, Direction.SOUTH, Direction.WEST]),
  });
