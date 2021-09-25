import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import OverviewCard from "components/Card/OverviewCard.js"

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
    <GridContainer>
    <GridItem xs={4} sm={4} md={4}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Accessibility />
          </CardIcon>
          <p className={classes.cardCategory}>Avoidable Costs</p>
          <h3 className={classes.cardTitle}>
          <span className={classes.successText}>
            <ArrowUpward className={classes.upArrowCardCategory} /> 55%
          </span>{"    "}
          150 B$
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Update />
            Just Updated
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={4} sm={4} md={4}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Accessibility />
          </CardIcon>
          <p className={classes.cardCategory}>Followers</p>
          <h3 className={classes.cardTitle}>+245</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Update />
            Just Updated
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    <GridItem xs={4} sm={4} md={4}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Accessibility />
          </CardIcon>
          <p className={classes.cardCategory}>Followers</p>
          <h3 className={classes.cardTitle}>+245</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Update />
            Just Updated
          </div>
        </CardFooter>
      </Card>
    </GridItem>
    </GridContainer>
      <GridContainer>
        <GridItem xs={10} sm={10} md={10}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h2 className={classes.cardTitle}>Demanded vs. Required Trucks</h2>
              </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={2} sm={2} md={2}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Score</p>
              <h3 className={classes.cardTitle}>
                2.23
              </h3>
              <p className={classes.cardCategory}>Additional Cost</p>
              <h4 className={classes.cardTitle}>
                2.23
              </h4>
              <p className={classes.cardCategory}>Total Demanded</p>
              <h4 className={classes.cardTitle}>
                2.23
              </h4>
              <p className={classes.cardCategory}>Relative Sent Back</p>
              <h4 className={classes.cardTitle}>
                0.20
              </h4>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
      <GridItem xs={10} sm={10} md={10}>
        <Card chart>
          <CardHeader color="success">
            <ChartistGraph
              className="ct-chart"
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h2 className={classes.cardTitle}>Demanded vs. Expected Fiber Types</h2>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={2} sm={2} md={2}>
        <Card>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <Store />
            </CardIcon>
            <p className={classes.cardCategory}>Score</p>
            <h3 className={classes.cardTitle}>
              2.23
            </h3>
            <p className={classes.cardCategory}>Additional Cost</p>
            <h4 className={classes.cardTitle}>
              2.23
            </h4>
            <p className={classes.cardCategory}>Dim2</p>
            <h4 className={classes.cardTitle}>
              1.0
            </h4>
            <p className={classes.cardCategory}>Dim3</p>
            <h4 className={classes.cardTitle}>
              1.0
            </h4>
          </CardHeader>
        </Card>
      </GridItem>
    </GridContainer>

    <GridContainer>
      <GridItem xs={10} sm={10} md={10}>
        <Card chart>
          <CardHeader color="danger">
            <ChartistGraph
              className="ct-chart"
              data={completedTasksChart.data}
              type="Line"
              options={completedTasksChart.options}
              listener={completedTasksChart.animation}
            />
          </CardHeader>
          <CardBody>
            <h2 className={classes.cardTitle}>Transportation Hours vs. Congestion</h2>
          </CardBody>
        </Card>
      </GridItem>
        <GridItem xs={2} sm={2} md={2}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Score</p>
              <h3 className={classes.cardTitle}>75</h3>
              <p className={classes.cardCategory}>Delay</p>
              <h4 className={classes.cardTitle}>
                2.23
              </h4>
              <p className={classes.cardCategory}>Public Outrage</p>
              <h4 className={classes.cardTitle}>
                10.0
              </h4>
              <p className={classes.cardCategory}>Dim3</p>
              <h4 className={classes.cardTitle}>
                1.0
              </h4>
            </CardHeader>
          </Card>
          <OverviewCard />
          </GridItem>
      </GridContainer>
    </div>
  );
}
