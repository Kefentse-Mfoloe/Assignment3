import React, { Component } from 'react';
import CourseOutline from './containers/CourseOutline/CourseOutline'

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <CourseOutline />
        </div>  
      </BrowserRouter>
      
    );
  }
}

export default App;
