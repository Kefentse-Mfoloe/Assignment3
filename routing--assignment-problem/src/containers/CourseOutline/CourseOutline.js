import React, { Component } from 'react';
import Courses from './Courses/Courses';
import Users from './Users/Users';
import Course from '../../components/Course/Course'
import './CourseOutline.css';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class CourseOutline extends Component {
    render() {
        return(
            <div>
                <header>
                    <nav className="CourseOutline">
                        <ul>
                            <li><NavLink to="/users">Users</NavLink></li>
                            <li><NavLink to="/courses">Courses</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                
                
                <Switch>
                    <Route path="/users" exact component={Users} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/" exact render={() => <h1>WELCOME TO ASSIGNMENT 3!!!</h1>} />
                    <Redirect from="/all-courses" to="/courses" />
                    <Route render={() => <h1>404 PAGE NOT FOUND</h1>} />
                </Switch>
            </div>
        )
    }
}

export default CourseOutline;