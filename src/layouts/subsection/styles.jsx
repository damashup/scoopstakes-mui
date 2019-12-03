import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import { colorGreyLight2, colorPrimary } from '../../components/page-styles/base-styles';

export const SectionTitleTypography = styled(Typography)`&&{
    color: ${colorGreyLight2};
    text-transform: capitalize;
}`;

export const SubSectionTitleTypography = styled(Typography)`&&{
    color: ${colorPrimary};
    text-transform: capitalize;
}`;
export const SubsectionTitleGrid = styled(Grid)`&&{
    margin: 2rem;
}`;