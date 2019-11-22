import styled from 'styled-components';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {colorFacebookBlue, colorGreyLight1} from '../../../../page-styles/base-styles';

export const AddTeamExpansionPanelSummary = styled(ExpansionPanelSummary)`&&{
    background-color: ${colorGreyLight1};
    color: ${colorFacebookBlue};
    font-size: 150%;
    font-weight: bold;
}`;