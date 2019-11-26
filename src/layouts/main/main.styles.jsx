import styled from 'styled-components';
import {lg, sm} from '../../components/page-styles/base-styles';


export const OverallDiv = styled.div`
      padding-top: 56px;
      height: 100%
      padding-left: 240px;
      @media only screen and (max-width: ${sm}) { 
        padding-top: 64px;
      }
      @media only screen and (max-width: ${lg}) { 
        padding-left: 0px;
      }
  `;
