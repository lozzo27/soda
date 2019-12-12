import React from 'react';
import './CvSection.css';

const CvSection = ({ section }) => {
  const list = section.list.map(element => (
    <li>
      {element}
    </li>
    ));

  return (
    <div>
      <p className='CvSectionBody'>{section.body}</p>
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default CvSection;
