import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import { colorGreyLight1, colorPrimaryDark } from "../../../../page-styles/base-styles";

export const RoundNoHeaderPaper = styled(Paper)`
    &&{
        display: flex;
        justify-content: space-between;
        background-color: ${colorGreyLight1};}
`;

export const TypographyHeader = styled(Typography)`
    && {
        padding: 1rem;
        text-align: center; 
        color: ${colorPrimaryDark};}
`;