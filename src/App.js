import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import routes from './config/routes'

class App extends React.Component {

    render() {
        return <Router>
            {
                routes.map((route,index)=>{
                    return <Route{...route} key={index}/>
                })
            }

        </Router>
    }
}

export default App;