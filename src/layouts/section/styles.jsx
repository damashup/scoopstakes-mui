import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import {colorWhite, colorPrimary } from '../../components/page-styles/base-styles';

export const SectionTitleGrid = styled(Grid)`&&{
  background-color: ${colorPrimary};
  color: ${colorWhite};
  margin-top: 2rem;
}`;