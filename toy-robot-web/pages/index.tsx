import { Container } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Grid } from '../components/Grid';
import { GridItem } from '../components/GridItem';
import { useToyRobot } from '../hooks/useToyRobot';
import styles from '../styles/Home.module.css';

const AREA_WIDTH = 5;
const AREA_HEIGHT = 5;

const Home: NextPage = () => {
  const {} = useToyRobot({
    areaHeight: AREA_WIDTH,
    areaWidth: AREA_HEIGHT,
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <Container>
      <Grid
        numCols={AREA_WIDTH}
        numRows={AREA_HEIGHT}
        renderCell={(row, col) => <GridItem col={col} row={row} />}
      />
    </Container>
  );
};

export default Home;
