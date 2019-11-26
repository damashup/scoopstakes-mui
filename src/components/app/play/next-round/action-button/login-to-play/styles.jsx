import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { colorQuinary } from '../../../../../page-styles/base-styles';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const useStyles = makeStyles(theme => ({
    paper: {
      //position: 'absolute',
      //width: 800,
      //backgroundColor: theme.palette.background.paper,
      //border: '2px solid #000',
      //boxShadow: theme.shadows[5],
      //padding: theme.spacing(2, 4, 3),
    },
  }));


export const ModalDivPaper = styled(Paper)`&&{
  position: absolute;
  width: 2000;
  border: 2px solid ${colorQuinary};
  margin-left: 2rem;
  padding: 3rem;

}`;