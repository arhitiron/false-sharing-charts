import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {chartsService} from "../../services";
import {BenchmarkBars} from "./components/BenchmarkBars";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {Copyright} from "../../components/Copyright";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./styles";


class benchmarkBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: chartsService.getData()
        };
    }


    render() {
        const {classes} = this.props;
        const {data} = this.state;
        return (
            <React.Fragment>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <div className={classes.jobContent}>
                            <BenchmarkBars data={data}/>
                        </div>
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
    return {};
}

const benchmarks = compose(
    withStyles(styles),
    connect(mapState, {}),
)(benchmarkBars);
export {benchmarks as Benchmarks};