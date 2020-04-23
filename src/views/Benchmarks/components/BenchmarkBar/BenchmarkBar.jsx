import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {styles} from "./styles";
import {Card, CardContent, CardHeader, Divider, Grid} from "@material-ui/core";
import clsx from "clsx";
import {compose} from "redux";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";


class benchmarkBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.prepareData(props.data),
            writerPairs: props.writerPairs,
            writeOperations: props.writeOperations,
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            callback: function (value, index, values) {
                                return value + " ns/op";
                            }
                        }
                    }]
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        fontColor: "#1976d2",
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItem) {
                            return "Fields offset: " + tooltipItem[0].xLabel;
                        },
                        label: function(tooltipItem) {
                            return Number(tooltipItem.yLabel) + " ns/op";
                        }
                    }
                }
            }
        };

    }

    prepareData(dataset) {
        const {labels, data} = this.getDataAndLabels(dataset);
        return {
            labels: labels,
            datasets: [
                {
                    label: 'Time on operation',
                    backgroundColor: 'rgba(25,118,210,0.2)',
                    borderColor: 'rgba(25,118,210,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(25,118,210,0.4)',
                    hoverBorderColor: 'rgba(25,118,210,1)',
                    data: data,

                }
            ],
        };
    }

    getDataAndLabels(dataset) {
        const defaultOffset = 8;
        let labels = [];
        let data = [];
        for (let i = 0; i < dataset.length; i++) {
            const item = dataset[i];
            let fields = item.fields;
            labels.push(fields[0] * defaultOffset + "-" + fields[1] * defaultOffset);
            data.push(item.result)
        }

        return {labels, data};
    }

    render() {
        const {data, options, writerPairs, writeOperations, ...rest} = this.state;
        const {classes, className} = this.props;
        const title = "Writer pairs: " + writerPairs;
        const subheader = "Write operations: " + writeOperations;
        return (
            <Card
                {...rest}
                className={clsx(classes.item, className)}
            >
                <CardHeader
                    title={title}
                    subheader={subheader}
                />
                <Divider/>
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                        wrap="wrap"
                    >
                        <Grid
                            className={classes.chart}
                            item
                            xs={12}
                        >
                            <CardContent>
                                < Bar
                                    data={data}
                                    width={100}
                                    height={500}
                                    options={options}
                                />
                            </CardContent>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }

}

function mapState(state) {
    return {};
}

const connectedBar = compose(
    withStyles(styles),
    connect(mapState, {}),
)(benchmarkBar);
export {connectedBar as BenchmarkBar};