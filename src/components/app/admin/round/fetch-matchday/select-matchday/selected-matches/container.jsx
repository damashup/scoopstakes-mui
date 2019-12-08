import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSelectedMatches } from "../../../../../../../redux/matchday/selectors/matchday.selectors";
import { Grid } from "@material-ui/core";
import PageTitle from "../../../../../../page-elements/page-title/page-title.component";
import { PaginatedTable } from "../../../../../../page-elements/table";

const SelectedMatchesContainer = ({ selectedMatches }) => {
  if (selectedMatches.length < 1)
    return (
      <Grid container justify="center">
        <PageTitle title="No Matches selected" />
      </Grid>
    );
  return (
    <>
      <Grid container direction="column" alignItems="center">
        <PageTitle title="Selected Matches" />
        <PaginatedTable 
            data={selectedMatches}
            rowType='SelectTeamsForRound'
        />
        {selectedMatches.map((fixture, index) => (
            
          <div key={fixture.id}>
            Match {index + 1}: {fixture.id}
          </div>
        ))}
      </Grid>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedMatches: selectSelectedMatches
});

export default connect(mapStateToProps)(SelectedMatchesContainer);
