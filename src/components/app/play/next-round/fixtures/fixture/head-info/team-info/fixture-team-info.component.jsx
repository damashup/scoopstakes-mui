import React from "react";
import { Avatar, Grid } from "@material-ui/core";

import { FixtureTeamName } from "./styles";

const TeamInfo = ({ team }) => (
  <>
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Avatar src={team.logo} />{" "}
      </Grid>
      <Grid item xs={12}>
        <FixtureTeamName>{team.name}</FixtureTeamName>
      </Grid>
    </Grid>
  </>
);

export default TeamInfo;
