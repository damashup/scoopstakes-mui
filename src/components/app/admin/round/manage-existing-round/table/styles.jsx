import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles2 = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  }));

export const NameContainerDiv = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
`;

export const AvatarStyled = styled(Avatar)`&&{
    margin-right: 2rem;
}`;
