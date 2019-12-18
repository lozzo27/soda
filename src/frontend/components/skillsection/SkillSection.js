import React from 'react';
import styled from 'styled-components'
import './SkillSection.css';

const SkillSection = ({ skill }) => {
  const Level = styled.div`
  width: ${props => props.level}%;
  background-color: ${skill.color};
  color: ${skill.color};
`;

  const list = skill.list.map(element => (
    <div className='SkillGrid' key={element}>
      <li>
        {element.skill}
      </li>
      <div className='Skill'>
        <Level level={element.level}>{element.level}%</Level>
      </div>
    </div>
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
