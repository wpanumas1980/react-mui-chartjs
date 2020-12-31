import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LineChart from './LineChart';
import GroupedBar from './GroupBar';
import PieChart from './Pie';
import { Typography } from '@material-ui/core';
import DoughnutChart from './DoughnutChart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Layout() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container justify='center'>
                <Grid item>
                    <Typography variant='h3'>
                        Example React ChartJS-2
                    </Typography>
                </Grid>
            </Grid>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <LineChart />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <GroupedBar />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <PieChart />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <DoughnutChart/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
