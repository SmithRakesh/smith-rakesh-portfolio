import { Box, Container, Grid, Link } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles(theme => createStyles({
    main:{
        display:"flex",
        alignItems:"center",
    },
    box:{
        width:"80%",
        margin:"0 auto",
        textAlign:"center"
    },
    container:{
        width:"40%"
    },
    h3:{
        marginLeft:"10%"
    }
}))

const Contacts = () => {
    const styles = useStyles()
    return (
        <div>
            <Box className={styles.box} >
                <h1>Contact</h1>
                <Container className={styles.container}>
                    <Grid container>
                        <Grid className={styles.main} item xs={12} sm={12} md={12} l={12} xl={12}>
                            <Link target="_blank" href="https://www.linkedin.com/in/smith-rakesh-aa664220b/">
                                <LinkedInIcon fontSize="large" />
                            </Link ><h3 className={styles.h3}>Linked in</h3>
                        </Grid>
                        <Grid className={styles.main} item xs={12} sm={12} md={12} l={12} xl={12}>
                            <Link target="_blank" href="https://github.com/SmithRakesh">
                                <GitHubIcon fontSize="large" />
                            </Link ><h3 className={styles.h3}>github</h3>
                        </Grid>
                        <Grid className={styles.main} item xs={12} sm={12} md={12} l={12} xl={12}>
                            <Link target="_blank" href="https://mailto:smithjacksj94@gmail.com">
                                <MailIcon fontSize="large" />
                            </Link ><h3 className={styles.h3}>email</h3>
                        </Grid>
                        <Grid className={styles.main} item xs={12} sm={12} md={12} l={12} xl={12}>
                                <div><LocationOnIcon fontSize="large" color="primary" /></div>
                            <h3 className={styles.h3}>bangalore,Karnataka</h3>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Contacts
