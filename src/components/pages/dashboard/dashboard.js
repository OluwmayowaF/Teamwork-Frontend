import React, { Component } from 'react';
import Sidebar from './sidebar';
//import LiveFeed from './liveFeed'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import CreateEmployee from '../createEmployee/createEmployee'


export class dashboard extends Component {

    state ={
        articles :[

        ]
    }
    render() {
        return (
            <div>
                <Sidebar />
                
                <CreateEmployee />
               
                
                
            </div>
        )
    }
}

export default dashboard
