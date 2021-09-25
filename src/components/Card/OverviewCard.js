import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: 300,
    maxWidth: 900,
  },
  image: {
    width: 50,
    height: 50,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square onClick={onClick}>

        <Grid container spacing={3}>
          <Grid item>
            <Grid item>
              <Typography variant="subtitle1">$12</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">14T CO2</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" color="textSecondary">
                  Total ordered
              </Typography>
                <Typography gutterBottom variant="subtitle1">
                  38 m^3
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Delivered
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  35 m^3
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Used
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  29.4 m^3
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  Possible pickuptime:
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  qwe
                </Typography>

              </Grid>
              <Grid item>

              </Grid>
            </Grid>

          </Grid>

        </Grid>
      </Paper>
    </div>
  );
}

//
ComplexGrid.propTypes = {
  item: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

ComplexGrid.defaultProps = {
  onClick: () => {},
}
