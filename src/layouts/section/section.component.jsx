import React from 'react';
import { Grid, Container} from '@material-ui/core';
import SectionRoutes from './components/routes';

const Section = () => {

    return (
       <Container maxWidth="lg">
            <Grid container spacing={1}>
                <SectionRoutes />        
            </Grid>
        </Container>
    )
}
  
export default Section;

