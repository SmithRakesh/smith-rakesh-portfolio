import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import SingleProject from './SingleProject'
import {projectInfo} from "../data/projectInfo" 
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
 
    box:{
        width:"80%",
        margin:"0 auto",
        textAlign:"center"
    }
}))

const Projects = () => {
    const styles = useStyles()
    return (
        <div >
             <Box className={styles.box} >
                 <h1>Projects</h1>
                <Container>
                    <Grid container>
                        {
                            projectInfo?.map(project => <Grid key={project.url} item xs={12} sm={12} md={6} l={6} xl={6}><SingleProject {...project}/> </Grid>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Projects
