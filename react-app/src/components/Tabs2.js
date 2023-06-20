// import { AppBar, Button, Tab, Tabs, makeStyles } from "@material-ui/core";
// import { TabContext, TabPanel } from "@material-ui/lab";
import { Grid, Paper, Tab, Tabs, makeStyles } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    tabs: {
        backgroundColor: "#1100f5",
        height: "3px",
    },
}));

const Tabs2 = () => {
    const classes = useStyles();
    const [value, setValue] = useState("0");
    const changeTab = (value) => {
        setValue(value);
    };
    return (
        <>
            <TabContext value={value}>
                <Tabs
                    value={value}
                    classes={{
                        indicator: classes.tabs,
                    }}
                >
                    <Tab label="Tab 1" value={"0"} onClick={() => changeTab("0")}></Tab>
                    <Tab label="Tab 2" value={"1"} onClick={() => changeTab("1")}></Tab>
                    <Tab label="Tab 3" value={"2"} onClick={() => changeTab("2")}></Tab>
                </Tabs>
                <TabPanel value={"0"}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>xs=12</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>xs=12 sm=6</Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>xs=12 sm=6</Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </TabPanel>
                <TabPanel value={"1"}>
                    <h1>Two</h1>
                </TabPanel>
                <TabPanel value={"2"}>
                    <h1>Three</h1>
                </TabPanel>
            </TabContext>
        </>
    );
};
// const classes = useStyles();

/*
  return (
    <>
      <Button variant="contained" className={classes.margin}>
        Default
      </Button>
      <Button
      className={classes.margin}
       variant="contained" color="primary">
        Primary
      </Button>
      <Button 
      variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <button style={{ color: "red", border: "none" }}>click me</button>
    </>
  );
  */
// return (
//   <div>
//     <TabContext value={value}>
//       <Tabs
//         variant="fullWidth"
//         centered
//         value={value}
//         aria-label="simple tabs example"
//         onChange={(event, value) => {
//           setValue(value);
//         }}
//       >
//         <Tab label="Item one" value={"one"} />
//         <Tab label="Item Two" value={"two"} />
//         <Tab label="Item three" value={"three"} />
//       </Tabs>
//       <TabPanel value={"one"} index={1}>
//         <h1>Hello! Good Morning Everyone</h1>
//       </TabPanel>
//       <TabPanel value={"two"} index={0}>
//         <h1>Today We will learn about material UI</h1>
//       </TabPanel>
//       <TabPanel value={"three"} index={2}>
//         Did you like my demo?
//       </TabPanel>
//     </TabContext>
//   </div>
// );
// };

export default Tabs2;