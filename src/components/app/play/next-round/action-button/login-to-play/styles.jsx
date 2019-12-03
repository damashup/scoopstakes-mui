import styled from 'styled-components';
import { Paper, Button } from '@material-ui/core';
import { colorQuinary, submitButton } from '../../../../../page-styles/base-styles';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const ModalDivPaper = styled(Paper)`&&{
  position: absolute;
  width: 2000;
  border: 2px solid ${colorQuinary};
  margin-left: 2rem;
  padding: 3rem;

}`;

export const SignInButton = styled(Button)`&&{
  ${submitButton}
  font-size: 200%;
}`
