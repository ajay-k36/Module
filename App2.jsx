import React from 'react';
import {Router,hashHistory,Route,Link,IndexRoute} from 'react-router'

const Home=()=> <h1>Home Component</h1>

const PermanentAddress=()=><div>Permanent Address is :- </div>
const TempporaryAddress=()=><div>Temporary Address is :- </div>

const Address=(props)=>{
    return (<div>
        &nbsp; <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to ="/address">Permanent Address</Link>
        &nbsp; <Link activeStyle={{color:'#53acff'}} to ="/address/tempadd">Temporary Address</Link>

        <h1>We are located at Pune location</h1>

        {props.children}
    </div>)
}


const NotFound=()=><h1>404... NOT FOUND Component</h1>

const Nav=()=>{
    return(
    <div>
        <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>HOME</Link> &nbsp;&nbsp;
        <Link activeStyle={{color:'#53acff'}} to='/address'>Address </Link>&nbsp;&nbsp;
        <Link activeStyle={{color:'#53acff'}}  to='/about'>About </Link>&nbsp;&nbsp;
        <Link activeStyle={{color:'#53acff'}} to='/signin'>SignIn </Link>&nbsp;&nbsp;

    </div>
    )
}

const Container=(props)=><div>
    <Nav/>
    {props.children}
</div>


const About=(props)=>{
    return(
        <div>
            <h1>About is called</h1>
            <h2>{props.params.name}</h2>
        </div>
    )
}

const SignIn=()=>{
   
     return(<div>Signin</div>)
}

class App extends React.Component {
    render() {
        return(<div>
            <Router history={hashHistory}>
                <Route path="/" component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path="/address" component={Address}>
                        <IndexRoute component={PermanentAddress}/>
                        <Route path="/address/tempadd" component={TempporaryAddress}/>
                    </Route>
                    <Route path="/about(/:name)" component={About}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        </div>)
    }
}


export default App;