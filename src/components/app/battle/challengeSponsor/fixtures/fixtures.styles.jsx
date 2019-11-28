import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import { colorPrimaryDark } from "../../../../page-styles/base-styles";

export const TypographyHeader = styled(Typography)`
    && {
        padding: 1rem;
        text-align: center; 
        color: ${colorPrimaryDark};}
`;