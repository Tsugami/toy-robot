import { Container } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem';
import { RobotController } from '../components/RobotController';
import { ToyRobotProvider } from '../hooks/useToyRobot';
import { useToyRobotErrorToast } from '../hooks/useToyRobotErrorToast';

const AREA_WIDTH = 5;
const AREA_HEIGHT = 5;

const Home: NextPage = () => {
  const toast = useToyRobotErrorToast();

  return (
    <ToyRobotProvider
      config={{
        areaHeight: AREA_HEIGHT,
        areaWidth: AREA_WIDTH,
        onError: toast,
      }}>
      <Container>
        <RobotController />
        <Grid
          numCols={AREA_WIDTH}
          numRows={AREA_HEIGHT}
          renderCell={(row, col) => <GridItem col={col} row={row} />}
        />
      </Container>
    </ToyRobotProvider>
  );
};

export default Home;
