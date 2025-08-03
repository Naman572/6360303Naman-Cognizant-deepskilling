import React from 'react';
const courses = [
  { id: 1, name: "Angular", duration: "4 weeks" },
  { id: 2, name: "React", duration: "6 weeks" },
  { id: 3, name: "Microservices", duration: "3 weeks" }
];
const CourseDetails = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Course Details</h2>
      {courses.map(course => (
        <div key={course.id} style={{ marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>{course.name}</h3>
          <p style={{ margin: 0 }}>{course.date}</p>
        </div>
      ))}
    </div>
  );
};
export default CourseDetails;