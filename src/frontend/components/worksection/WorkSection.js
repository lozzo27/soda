import React from 'react';
import './WorkSection.css';

const WorkSection = ({ work }) => {
  const experiences = work.experiences.map(experience => (
    <li key={experience}>{experience}</li>
  ));

  return (
    <div className='WorkSection'>
      <div className='WorkOverview'>
        <p className='WorkSectionRole'>{work.role}</p>
        <p className='WorkSectionDate'>{work.date}</p>
      </div>
      <ul>{experiences}</ul>
    </div>
  );
}

export default WorkSection;
