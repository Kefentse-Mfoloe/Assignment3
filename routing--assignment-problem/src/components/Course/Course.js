import React, { Component } from 'react';
import { render } from 'react-dom';

class Course extends Component {
    state = {
        id: null,
        title: null,
    }
    
    componentDidMount() {
        console.log(this.props);
        this.setState({id: this.props.match.params.id, title: this.props.match.params.title});
    }

    // componentDidUpdate() {
    //     if(!this.state.id || this.state.id != this.props.match.params.id){
    //         this.setState({id: this.props.match.params.id, title: this.props.location.search.title});
    //     }
    // }

    render() {
        let course = <p style={{textAlign: 'center'}}>Nothing</p>
        if (this.state.id) {
            course = (
                <div>
                    <h1>Title: {this.state.title}</h1>
                    <p>You selected the Course with ID: {this.state.id}</p>
                </div>
            )
        }

        return course;
    }
    
}

export default Course;