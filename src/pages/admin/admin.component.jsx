import React from "react";
import {withRouter} from 'react-router-dom';
import {PageDiv} from "../../components/page-styles/base-styles";
import PageTitle from "../../components/page-elements/page-title/page-title.component";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import AdminNavButtons from "../../components/app/admin/nav/nav-buttons";
import CreateRound from '../../components/app/admin/round-admin/create-round';
import TeamAdmin  from '../../components/app/admin/team-admin';

const Admin = ({match, history}) => {
    const task = match.params.task
    const path = match.path.split("/:").shift();
    return (
        <PageDiv>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={3}
                >    
                    <PageTitle title="Admin" />
                </Grid>
            </Container>
        </PageDiv>
    )
}

export default withRouter(Admin);