import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from  '@material-ui/core'
import makeStyles from './styles'
import Form from './Form/Form'

const Main = () => {
    const classes = makeStyles()
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
            <CardContent>
                <Typography variant="h5" align="center">Total Balance $100</Typography>
                <Typography variant="subtitle1" style={{lineHeight: "1.5em", marginTop: "20px"}}>
                    {/* InfoCard */}
                    Try saying : Add Income for $100 in category salary for Monday...
                </Typography>

                <Divider />
                <Form />
            </CardContent>

            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* <List /> */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
