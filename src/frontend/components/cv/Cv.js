import React from 'react';
import CvSection from '../cvsection/CvSection';
import WorkSection from '../worksection/WorkSection';
import { sections, introduction, workExperencies } from '../cv/CvText';
import './Cv.css';

const Cv = () => {
  return (
    <div className='Cv'>
      <p className='CvIntroduction'>{introduction}</p>
      <div>
        <p className='CvSectionTitle'>Skills</p>
        {sections.map(section => <CvSection section={section} />)}
      </div>
      <div>
        <p className='CvSectionTitle'>Work Experience</p>
        {workExperencies.map(work => <WorkSection work={work} />)}
      </div>
    </div>
  );
}

export default Cv;
