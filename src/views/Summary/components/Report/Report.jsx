import React, {Component} from 'react';
import {Card, CardContent, CardHeader, Divider, Grid} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import Title from '../../Title';
import clsx from "clsx";
import {compose} from "redux";
import {styles} from "./styles";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";


class Report extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, className} = this.props;
        return (
            <React.Fragment>
                <Title>Summary</Title>
                <Card
                    className={clsx(classes.item, className)}
                >
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
                                    <Typography variant="body1" gutterBottom={true}>
                                        Here is an example of <Link href="https://en.wikipedia.org/wiki/False_sharing">false
                                        sharing</Link>. Source code you can find <Link
                                        href="https://github.com/arhitiron/false-sharing-demo">here</Link>.
                                        Main idea was to demonstrate differences in performance when we have false
                                        sharing
                                        and when writing into different <Link
                                        href="https://en.wikipedia.org/wiki/CPU_cache">cache lines</Link>.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom={true}>
                                        Provided benchmarks contain next sets: 1, 2, 10, 100 writer pairs. Which means
                                        we
                                        have 2, 4, …, 200 goroutines to show how performance changes when the number of
                                        concurrent operations grows. For each write pair we have we run a set of 10,
                                        100,
                                        1000, 10000 volatile operations that guarantee “<Link
                                        href="https://en.wikipedia.org/wiki/Happened-before">happens before</Link>”
                                        relation.
                                        For each combination of provided above sets, application runs golang benchmark.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom={true}>
                                        Y-axis - time spent on operation (lower better). X-axis - shows offsets for
                                        field
                                        pairs where the operation was carried out. For example 0-8 means goroutine 1
                                        writes
                                        to field by offset 0 and goroutine 2 writes to field by offset 8.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom={true}>
                                        As we can easily find for cases when the number of operations less or equal 100,
                                        false sharing cases are almost indistinguishable with write to separate cache
                                        lines.
                                        However, in cases where the number of operations increases, there are clear
                                        boundaries of the false sharing effect.


                                    </Typography>

                                </CardContent>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
}

function mapState(state) {
    return {};
}

const connectedReport = compose(
    withStyles(styles),
    connect(mapState, {}),
)(Report);
export {connectedReport as Report};