import React, { Component} from 'react';
import './Layout.css';
import Navbar from './Navbar'
import Intro from './Intro'
import Insight from './Insight'
import ContactUs from './ContactUs'
import Event from './Event'
import Footer from './Footer'

class Layout extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Navbar />
                <Intro />
                <div className="layout-insight">
                    <Insight />
                </div>
                <ContactUs />
                <Event />
                <Footer />
            </div>
        )
    }
}
export default Layout;