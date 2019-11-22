import styled, {css} from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import { colorGreyLight2, imageTeamLogoMedium } from '../../../../../page-styles/base-styles';

const LayoutStyles =css`
    background-color: ${colorGreyLight2};
    padding: 1rem;
`;

export const CompetitonText = styled(Typography)`&&{font-weight: bold;}`;

export const FixtureGrid = styled(Grid)`&&{border: 1px solid ${colorGreyLight2};}`;

export const FooterGrid = styled(Grid)`&&{${LayoutStyles}}`;

export const HeaderGrid = styled(Grid)`&&{${LayoutStyles}}`;

export const KOText = styled(Typography)`&&{}`;

export const MainGrid = styled(Grid)`&&{padding: 2rem;}`;

export const TeamGrid = styled(Grid)`&&{}`;

export const TeamImage = styled.div`&&{
    display: flex;
    justify-content: 'center;
    ${imageTeamLogoMedium}
}`;

export const TeamName = styled(Typography)`&&{border: 1px solid ${colorGreyLight2};}`;

export const VersusText = styled(Typography)`&&{border: 1px solid ${colorGreyLight2};}`;
