import React, { Component } from 'react';
import Sidebar from './sidebar';
import LiveFeed from './liveFeed'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../App.css';


export class dashboard extends Component {

    state ={
        articles :[

        ]
    }
    render() {
        return (
            <div>
                <Sidebar />
                <LiveFeed />
               
                
                
            </div>
        )
    }
}

export default dashboard
