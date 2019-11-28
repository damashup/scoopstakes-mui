import React from 'react';
import {PageDiv} from '../../../components/page-styles/base-styles';
import Container from '@material-ui/core/Container';
import Splash from '../../../components/app/battle/challengeSponsor/splash-nav/splash';
import SplashNav from '../../../components/app/battle/challengeSponsor/splash-nav';
import {withRouter} from 'react-router-dom';

const Nanzo = ({match}) => {
  const base = match.path.split("/:").shift();
    return (
        <PageDiv>
          <Container maxWidth="lg">
            <SplashNav roundId={match.params.roundId} base={base} />
            <Splash roundId={match.params.roundId} base={base}/>
          </Container>
        </PageDiv>
    )
}
export default withRouter(Nanzo);
