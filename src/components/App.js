// React Router
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Custom Components
import Header from './repeating/Header'
import Intro from './homepage/Intro'
import Project from './project/Project'
import ProjectList from './homepage/ProjectList'
import Footer from './repeating/Footer'
import Contact from './contact/Contact'
import About from './about/About'
// Stylesheets
import '../styles/App.scss'
// Context
import AppContext from '../context/app-context'

const App = () => {
  
  // Context Values
  const [ activeProject, setActiveProject ] = useState(JSON.parse(localStorage.getItem('active-project')))
  const [ databaseSoftware, setDatabaseSoftware ] = useState(JSON.parse(localStorage.getItem('database-software')))

  return (
      <AppContext.Provider value={{ activeProject, setActiveProject, databaseSoftware, setDatabaseSoftware }}>
        <Router>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Intro />
                <ProjectList />
              </Route>
              <Route exact path='/project'>
                <Project />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
            </Switch>
            <Footer />
        </Router>
      </AppContext.Provider>
  )
}

export {App as default}