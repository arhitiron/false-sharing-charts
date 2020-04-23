import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from "redux";


import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';

import {styles} from "./styles";
import {history} from '../../helpers';
import {MenuBar} from '../../components/MenuBar';
import {Summary} from '../Summary';
import {Benchmarks} from '../Benchmarks';
import "./styles.css";


class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.wrapper}>
                <CssBaseline/>
                <MenuBar/>

                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Summary}/>
                        <Route exact path="/benchmarks" component={Benchmarks}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    return {};
}

const connectedApp = compose(
    withStyles(styles),
    connect(mapState, {}),
)(App);
export {connectedApp as App};