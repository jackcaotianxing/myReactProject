import React from 'react'
import withCheckLogin from '../../contaniers/with-check-login'
@withCheckLogin
 class Home extends React.Component{

    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}
export default Home;