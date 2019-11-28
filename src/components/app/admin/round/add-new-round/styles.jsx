import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Field } from 'formik';
import { submitButton} from '../../../../page-styles/base-styles';

export const FormField = styled(Field)`&&{}`;

export const SubmitButton = styled(Button)`&&{
    ${submitButton}
}`