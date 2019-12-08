import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { addNewRoundStart } from "../../../../../redux/round/actions";

import { SubmitButton } from "./styles";
import { Grid } from "@material-ui/core";
import { INITIAL_ROUND_VALUES } from "./helper";
import SportSelector from "./sport-selector";
import TextInput from "../../../../page-elements/form/formik/input/text-input";
import DateInput from "../../../../page-elements/form/formik/input/date-input";
import MatchDay from "../../matchday";

const AddRoundInput = ({ addNewRoundStart }) => {
  const initial_state = INITIAL_ROUND_VALUES;
  const [newRoundDetails, setNewRoundDetails] = useState(initial_state);

  const {
    deadline_time,
    first_ko_time,
    matchday,
    round_no,
    round_status,
    results,
    sport,
    uid
  } = newRoundDetails;

  if (newRoundDetails !== initial_state)
    addNewRoundStart({
      deadline_time,
      first_ko_time,
      matchday,
      round_no,
      round_status,
      results,
      sport,
      uid
    });

  return (
    <>  
    <Formik
      initialValues={INITIAL_ROUND_VALUES}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setNewRoundDetails({
          deadline_time: data.deadline_time,
          first_ko_time: data.first_ko_time,
          matchday: data.matchday,
          round_no: data.round_no,
          round_status: data.round_status,
          results: data.results,
          sport: data.sport,
          uid: data.uid
        });
        resetForm();
      }}
    >
      {(values, isSubmitting) => (
        <Form>
          <Grid container spacing={4}>
            <Grid item xs={1}>
              <Field
                name={`uid`}
                labelName="UID"
                variant="outlined"
                component={TextInput}
              />
            </Grid>
            <Grid item xs={1}>
              <Field
                name={`round_no`}
                labelName="Round Number"
                variant="outlined"
                component={TextInput}
              />
            </Grid>
            <Grid item xs={2}>
              <SportSelector />
            </Grid>
            <Grid item xs={4}>
              <Field
                name={`deadline_time`}
                labelName="Deadline Date"
                component={DateInput}
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                name={`first_ko_time`}
                labelName="1st Kick Off"
                type="datetime"
                component={DateInput}
              />
            </Grid>
          </Grid>
        
          <MatchDay values={values} />

          <SubmitButton disabled={isSubmitting} type="submit" fullWidth>
            Submit
          </SubmitButton>

          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewRoundStart: newTeamDetails => dispatch(addNewRoundStart(newTeamDetails))
});

export default connect(null, mapDispatchToProps)(AddRoundInput);
