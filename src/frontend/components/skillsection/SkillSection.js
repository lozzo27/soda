import React from 'react';
import './SkillSection.css';

const SkillSection = ({ skill }) => {
  const list = skill.list.map(element => (
    <li>
      {element}
    </li>
    ));

  return (
    <div>
      <p className='SkillSectionBody'>{skill.body}</p>
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default SkillSection;
