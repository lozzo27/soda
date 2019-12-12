import React from 'react';
import SkillSection from '../skillsection/SkillSection';
import WorkSection from '../worksection/WorkSection';
import { skills, introduction, workExperencies } from '../cv/CvText';
import './Cv.css';

const Cv = () => {
  return (
    <div className='Cv'>
      <p className='CvIntroduction'>{introduction}</p>
      <div>
        <p className='CvSectionTitle'>Skills</p>
        {skills.map(skill => <SkillSection skill={skill} />)}
      </div>
      <div>
        <p className='CvSectionTitle'>Work Experience</p>
        {workExperencies.map(work => <WorkSection work={work} />)}
      </div>
    </div>
  );
}

export default Cv;
