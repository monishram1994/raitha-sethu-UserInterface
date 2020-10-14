import React from 'react';
import Header from './Header'
import '../styles/all.css'
import '../styles/style.css'
import ControlledCarousel from './ControlledCarousel'
import PageContent from './PageContent'
import Footer from './Footer'

export default class HomePage extends React.Component{
    
    render(){
        // const style1 = {backgroundImage: url('../images/slider-01.jpg')}
        return(
            <div>
                <Header /> 
                <ControlledCarousel />
                <PageContent />
                <Footer />
            </div>
        )       
    }
}