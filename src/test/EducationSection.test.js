import React from 'react';
import 'jest';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
enzyme.configure({ adapter: new Adapter() });
import EducationSection from '../frontend/components/educationsection/EducationSection';
import { education } from '../frontend/components/cv/CvText';

test('renders Uni education', () => {
  const component = enzyme.shallow(<EducationSection education={education[0]}/>);

  expect(component.text()).toContain('Universita');
  expect(component.text()).toContain('2000');
  expect(component.text()).toContain('Engineering');
  expect(component.text()).toContain('JavaScript');
});

test('renders High school education', () => {
  const component = enzyme.shallow(<EducationSection education={education[1]}/>);

  expect(component.text()).toContain('Liceo Scientifico');
  expect(component.text()).toContain('1996');
  expect(component.text()).toContain('PNI');
  expect(component.text()).toContain('Pascal');
});
