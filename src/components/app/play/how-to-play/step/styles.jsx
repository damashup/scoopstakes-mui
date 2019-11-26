import styled from 'styled-components';
import { Avatar, Typography } from '@material-ui/core';
import { colorQuinaryLight, colorGreyDisabled } from '../../../../page-styles/base-styles';

export const StepAvatar = styled(Avatar)`&&{
    background-color: ${colorQuinaryLight};
}`;

export const SectionTitleTypography = styled(Typography)`&&{
    // color: ${colorGreyDisabled}
    // font-weight: bold;
}`;