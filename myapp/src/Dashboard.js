import {Component} from 'react'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import './dashboard.css';

class Dashboard extends Component{
    render(){
        return (
            <div className='main-dash-container'>
                <div className='right-container'>
                    <div className='right-container-deep'>
                        <div className='right-container-text'>
                            <h1 className='main-heading-right'>Board.</h1>
                            <div className='list-container-right'>
                                <ul>
                                    <li>Dashboard</li>
                                    <li>Transactions</li>
                                    <li>Schedules</li>
                                    <li>Users</li>
                                    <li>Settings</li>
                                </ul>
                            </div>
                            <div className='help-container'>
                                <p>Help</p>
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='left-container'>
                    <div className='actual-container'>
                    <div className='top-part'>
                        <h3>Dashboard</h3>
                        <div className='top-right-container'>
                            <input type = "search" className='search-bar'/>
                            <img src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiZOW1vGJRxcRS5o7YuzrJFl-QkR_GiJZcscqoT8_5d1VNUcad" className='profile-image'/>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='card'>
                            <p>Total Revenues</p>
                            <h1>$2,129,430</h1>
                        </div>
                        <div className='card'>
                            <p>Total Revenues</p>
                            <h1>$2,129,430</h1>
                        </div>
                        <div className='card'>
                            <p>Total Revenues</p>
                            <h1>$2,129,430</h1>
                        </div>
                        <div className='card'>
                            <p>Total Revenues</p>
                            <h1>$2,129,430</h1>
                        </div>
                    </div>
                    <div className='chart-part'>
                        <LineChart/>
                    </div>

                    <div className='bottom-part'>
                    <   PieChart/>
                    <div className='schedule-container'>
                        <div className='schedule-container-deep'>
                            <h2>Today's schedule</h2>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;