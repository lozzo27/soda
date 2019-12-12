import React from 'react';
import SkillSection from '../skillsection/SkillSection';
import WorkSection from '../worksection/WorkSection';
import EducationSection from '../educationsection/EducationSection';
import { skills, introduction, workExperencies, education } from '../cv/CvText';
import './Cv.css';

const Cv = () => {
  return (
    <div className='Cv'>
      <p className='CvIntroduction'>{introduction}</p>
      <div>
        <p className='CvSectionTitle'>Work Experience</p>
        {workExperencies.map(work => <WorkSection work={work} />)}
      </div>
      <div>
        <p className='CvSectionTitle'>Skills</p>
        {skills.map(skill => <SkillSection skill={skill} />)}
      </div>
      <div className='CvEducation'>
        <p className='CvSectionTitle'>Education</p>
        <div className='CvEducationInternal'>
          {education.map(e => <EducationSection education={e} />)}
        </div>
      </div>
    </div>
  );
}

export default Cv;
