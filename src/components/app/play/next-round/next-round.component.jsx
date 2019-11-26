import React from 'react';
import NextRoundHeader from './header';
import NextRoundFixtures from './fixtures'
import { Paper, Button } from '@material-ui/core';
import {NextRoundPaper} from './styles';
import ActionButton from './action-button';

const NextRoundComponent = ({nextRound}) => (
    <>
    <NextRoundPaper elevation={4}>
      <NextRoundHeader nextRound={nextRound} />
      <ActionButton />
      <NextRoundFixtures results={nextRound.results} />
    </NextRoundPaper>
    </>
  );

export default NextRoundComponent;
