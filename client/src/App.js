import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './views/Landing'
import Projects from './views/Projects'
import ProjectPages from './views/ProjectPages'
import ViewProject from './views/ViewProject'
import Resume from './views/Resume'
import Contact from './views/Contact'
import Admin from './views/Admin'
import Edit from './views/Edit'


function App() {

    return ( 
      <div className="App" >

        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Landing />
            </Route>

            <Route exact path="/projects">
              <Projects />
            </Route>
            
            <Route exact path="/projects/view/:proj/:img">
              <ViewProject />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/resume">
              <Resume />
            </Route>

            <Route exact path="/administrators">
              <Admin />
            </Route>

            <Route exact path="/projects/:id">
              <Edit />
            </Route>

            <Route exact path="/projectpages">
              <ProjectPages />
            </Route>

          </Switch>
        </BrowserRouter>

      </div>
    )
}

export default App;
