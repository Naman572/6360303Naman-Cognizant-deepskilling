import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Blogger Dashboard</h1>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '30px',
        borderTop: '2px solid green',
        paddingTop: '20px'
      }}>
        <div style={{ width: '300px', borderRight: '3px solid green', paddingRight: '20px' }}>
          <CourseDetails />
        </div>
        <div style={{ width: '300px', borderRight: '3px solid green', padding: '0 20px' }}>
          <BookDetails />
        </div>
        <div style={{ paddingLeft: '20px' }}>
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
