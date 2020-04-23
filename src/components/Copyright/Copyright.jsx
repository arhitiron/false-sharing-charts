import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export function Copyright() {
    return (
        <React.Fragment>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://antyron.com/">
                    Alexey Tyron
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </React.Fragment>
    );
}