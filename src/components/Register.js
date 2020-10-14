import React from 'react';
import '../styles/register.css';
import Main from '../components/Registration/Main';
import Header from './Header'


export default class Register extends React.Component{


      componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    render(){
        return (
            <div className="Register">
              <div className="Content">
                {/* <Header/> */}
                <Main />               
              </div>
            </div>
        )
    }     
}


