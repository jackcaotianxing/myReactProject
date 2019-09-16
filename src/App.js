import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import routes from './config/routes'
import NotMach from './components/not-match'
import BasicLayout from './components/basic-layout/index'
import Login from "./contaniers/login";
class App extends React.Component {

    render() {
        return <Router>
            <Switch>
                <Route path='/login' component={Login} exact/>
                <BasicLayout>
                    <Switch>
                        {
                            routes.map((route,index)=>{
                                return <Route{...route} key={index}/>
                            })
                        }
                        <Route  component={NotMach}></Route>
                    </Switch>
                </BasicLayout>
            </Switch>

        </Router>
    }
}

export default App;