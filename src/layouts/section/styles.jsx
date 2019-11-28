import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import {colorWhite, colorPrimaryDark } from '../../components/page-styles/base-styles';

export const SectionTitleGrid = styled(Grid)`&&{
  background-color: ${colorPrimaryDark};
  color: ${colorWhite};
  margin-top: 2rem;
}`;