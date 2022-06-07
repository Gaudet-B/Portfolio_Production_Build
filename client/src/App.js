import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './views/Landing'
// import Projects from './views/Projects'
import ProjectPages from './views/ProjectPages'
// import ViewProject from './views/ViewProject'
import Resume from './views/Resume'
import Contact from './views/Contact'
import Admin from './views/Admin'
import Edit from './views/Edit'
import ProjectMenu from './views/ProjectMenu'

import Pizza from './components/pizza/Pizza'


function App() {

    return ( 
      <div id="App" className="App" style={{ backgroundColor: "rgba(26,26,26,1)"}} >

        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Landing />
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

            <Route exact path="/projectmenu">
              <ProjectMenu />
            </Route>

            <Route exact path="/projects">
              <ProjectPages />
            </Route>

            {/* dedicated route for p!zza interactive demo */}
            <Route exact path="/p!zza">
              <Pizza />
            </Route>

          </Switch>
        </BrowserRouter>

      </div>
    )
}

export default App;
