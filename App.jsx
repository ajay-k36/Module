import React from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'

import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'

class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <h1>Rounter Example</h1>
                    <nav>
                        <ul>
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </nav>
                    <hr/>

<Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/not-found' component={NotFound}/>
        <Route path='/users' component={Users}/>
        <Route path='/contact' component={Contact}/>
        <Route component={NotFound1}/>
</Switch>
                </div>
            </Router>
        )
    }
}

export default App