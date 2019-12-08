import React from "react";
import { connect } from "react-redux";
import { selectActiveMatchday } from "../../../../../../redux/matchday/selectors/matchday.selectors";
import { createStructuredSelector } from "reselect";
import { Grid } from "@material-ui/core";
import { EnhancedCheckboxTable } from "../../../../../page-elements/table";
import PageTitle from "../../../../../page-elements/page-title/page-title.component";
import Moment from "react-moment";
import SelectedMatchesContainer from './selected-matches';

const SelectMatchdayContainer = ({ activeMatchdays, dateString }) => {
  if (activeMatchdays.length < 1)
    return (
      <Grid container justify="center">
        <PageTitle title="No Matchday selected" />
      </Grid>
    );

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <PageTitle title="Showing Matches for" />
        <Moment format="dddd D MMMM YYYY">{dateString}</Moment>
        <PageTitle title="Select Matches" />
        <EnhancedCheckboxTable
          rows={activeMatchdays}
          rowType="SelectMatchday"
        />
      </Grid>
      <Grid container>
        <PageTitle title="Selected Matches" />
        <SelectedMatchesContainer />
      </Grid>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  activeMatchdays: selectActiveMatchday
});

export default connect(mapStateToProps)(SelectMatchdayContainer);
