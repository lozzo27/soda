import React from 'react';
import './EducationSection.css';

const EducationSection = ({ education }) => {
  const subjects = education.subjects.map(subject => (
    <li key={subject}>{subject}</li>
  ))

  return (
    <div className='EducationSection'>
      <div className='EducationOverview'>
        <p className='EducationInstitute'>{education.institute}</p>
        <p className='EducationInstitute'>{education.course}</p>
        <p className='EducationDate'>{education.date}</p>
      </div>
      <p>Core subjects</p>
      <ul>{subjects}</ul>
    </div>
  );
}

export default EducationSection;
