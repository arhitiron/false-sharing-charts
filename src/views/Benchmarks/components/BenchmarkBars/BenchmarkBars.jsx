import React, {Component} from 'react';
import {BenchmarkBar} from "../BenchmarkBar";
import {compose} from "redux";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "../BenchmarkBar/styles";
import {connect} from "react-redux";


class benchmarkBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };

    }

    getBenchmarks(data) {
        const benchmarks = [];
        for (const writerPairs in data) {
            if (!data.hasOwnProperty(writerPairs)) {
                continue;
            }
            const writeOperationsData = data[writerPairs];
            for (const writeOperations in writeOperationsData) {
                if (!writeOperationsData.hasOwnProperty(writeOperations)) {
                    continue;
                }
                const value = writeOperationsData[writeOperations];
                benchmarks.push(<BenchmarkBar
                    key={writerPairs + writeOperations}
                    data={value}
                    writerPairs={writerPairs}
                    writeOperations={writeOperations}
                />)
            }
        }
        return benchmarks;
    }

    render() {
        const {data} = this.state;
        const benchmarks = this.getBenchmarks(data);
        return (
            <div>
                {benchmarks}
            </div>
        );
    }

}

function mapState(state) {
    return {};
}

const connectedBars = compose(
    withStyles(styles),
    connect(mapState, {}),
)(benchmarkBars);
export {connectedBars as BenchmarkBars};