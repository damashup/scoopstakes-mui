import styled from 'styled-components';
import { List } from '@material-ui/core';

export const LabelText = styled.div`
    text-align: right;
    //border: 1px solid;
`;
export const PredictedScoreText = styled.div`
    text-align: center;
    display:flex;
    justify-content: space-around;
    //border: 1px solid;
`;

export const PointsText = styled.div`
    text-align: right;
    //border: 1px solid;
`;

export const FixturesListHeaderItem = styled(List)`&&{
    margin: 0 1rem;

}`

export const MoreInfoDiv = styled.div`&&{
    padding-right: 1rem;

}`