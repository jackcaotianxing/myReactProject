import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import routes from './config/routes'
import NotMach from './components/not-match'
import BasicLayout from './components/basic-layout/index'
class App extends React.Component {

    render() {
        return <Router>
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

        </Router>
    }
}

export default App;