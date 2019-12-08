import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { matchday } from "./data";
import PageSubTitle from "../../../page-elements/page-subtitle/page-subtitle.component";
import Moment from "react-moment";
import { Grid } from "@material-ui/core";
import MatchItem from "./match-item/match-item.component";

const MatchDay = ({ values }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const dateTitle = (
    <Moment format="ddd DD MMM">{matchday.filters.dateFrom}</Moment>
  );
  const countTitle = `(${matchday.count})`;
  const matches = matchday.matches;
  return (
    <>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <List>
            <ListItem button onClick={handleClick}>
              <Grid container justify="space-between">
                <ListItemIcon>
                  <PageSubTitle subtitle={dateTitle} />
                </ListItemIcon>
                <PageSubTitle subtitle={dateTitle} />
                <PageSubTitle subtitle={countTitle} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </Grid>
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {matches.map((m, index) => {
                  return <MatchItem values={values} m={m} index={index} key={m.id} />;
                })}
              </List>
            </Collapse>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default MatchDay;
