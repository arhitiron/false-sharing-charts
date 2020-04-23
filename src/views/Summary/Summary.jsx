import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import {styles} from "./styles";
import {Copyright} from "../../components/Copyright";
import {Report} from './components';



class Summary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Report/>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            <Copyright/>
                        </Box>
                    </Container>
                </main>
            </React.Fragment>
        );
    }
}


function mapState(state) {
    const title = "Summary";
    return {title};
}

const connectedDashboardPage = compose(
    withStyles(styles),
    connect(mapState, {}),
)(Summary);
export {connectedDashboardPage as Summary};