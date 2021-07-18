import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

const Routes = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/"><Home/></Route>
            </Switch>
            <Switch>
                <Route path="/contact"><Contacts/></Route>
            </Switch>
            <Switch>
                <Route path="/about"><About/></Route>
            </Switch>
            <Switch>
                <Route path="/projects"><Projects/></Route>
            </Switch>
            <Switch>Page not found</Switch>
        </div>
    )
}

export default Routes
