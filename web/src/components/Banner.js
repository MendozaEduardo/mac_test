import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 1600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
  },
}));

export default function Banner() {
    const classes = useStyles();
    const [country, setCountry] = useState(null);
    
    // const getCountry = async () => {
    //     let data = await api.get('/').then(({data}) => data);
    //     setCountry(data);
    // }
    
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth>
                        <Typography component="div" >
                            <h1>Hello, you are in [Country]</h1>
                            <h1>Please enter an amount of money in your local currency [input field]</h1>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography component="div" >
                            <h1>You could buy [#] of Big Macs in your country </h1>
                            <h1>Your Dollar Purchasing Parity (PPP) is [#]</h1>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography>
                            <h1>Random Country: [RANDOM COUNTRY]</h1>
                            <h1>You could buy [#] of Big Macs in [RAND COUNTRY] with [INPUT]!</h1>
                            <h1>Your [INPUT] is worth about [#] in [RAND COUNTRY]</h1>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}