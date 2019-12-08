import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { fetchMatchdayStart } from "../../../../../redux/matchday/actions";

import { SubmitButton } from "./styles";
import { Grid } from "@material-ui/core";
import TextInput from "../../../../page-elements/form/formik/input/text-input";
import SelectMatchday from "./select-matchday";
import PageTitle from "../../../../page-elements/page-title/page-title.component";
import PageSubTitle from "../../../../page-elements/page-subtitle/page-subtitle.component";
import Moment from "react-moment";

const FetchMatchDay = ({ fetchMatchdayData }) => {
  const initial_state = { dateString: "" };
  const [newDate, setNewDate] = useState(initial_state);

  const { dateString } = newDate;

  if (newDate !== initial_state) fetchMatchdayData({ dateString });

  return (
    <>
          <Formik
            initialValues={initial_state}
            onSubmit={(data, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              setNewDate({
                dateString: data.dateString
              });
              resetForm();
            }}
          >
            {(values, isSubmitting) => (
              <Form>
                <Grid container direction="column" spacing={2} alignItems="center">
      
                    <Grid item xs={12}>
                      <PageTitle title="Enter Matchday" />
                    </Grid>
 

                  <Grid item xs={12}>
                    <PageSubTitle subtitle="(Format = YYYY-MM-DD)" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name={`dateString`}
                      labelName="Matchday Date"
                      variant="outlined"
                      component={TextInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SubmitButton disabled={isSubmitting} type="submit">
                      GET MATCHDAY
                    </SubmitButton>
                  </Grid>
                </Grid>

                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>

      <Grid container>
        <SelectMatchday dateString={dateString}/>
      </Grid>

    </>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchMatchdayData: date => dispatch(fetchMatchdayStart(date))
});

export default connect(null, mapDispatchToProps)(FetchMatchDay);
