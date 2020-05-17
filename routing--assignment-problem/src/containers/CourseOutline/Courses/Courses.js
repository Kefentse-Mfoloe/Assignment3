import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Course from '../../../components/Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourse: {id: 1, title: 'Angular - The Complete Guide'}
    }

    selectedCourseHandler = (index) => {
        const selectedCourse = { ...this.state.courses[index] }
        this.setState({selectedCourse: selectedCourse});
    }

    render () {
        const courses = this.state.courses.map( (course, index) => {
            return (
                <Link to={"/courses/" + course.id + course.title}
                        key={course.id}>
                    <article className="Course" 
                        onClick={() => this.selectedCourseHandler(index)} >{course.title}</article>
                </Link>
            )
        } )

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    { courses }
                </section>
                <Route path={this.props.match.url + "/:id+:title"} component={Course} />
            </div>
        );
    }
}

export default Courses;