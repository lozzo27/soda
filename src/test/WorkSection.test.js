import React from 'react';
import 'jest';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
enzyme.configure({ adapter: new Adapter() });
import WorkSection from '../frontend/components/worksection/WorkSection';
import { workExperencies } from '../frontend/components/cv/CvText';

test('renders work esperience', () => {
  const component = enzyme.shallow(<WorkSection work={workExperencies[0]}/>);

  expect(component.text()).toContain('October 2013');
  expect(component.text()).toContain('Senior Developer');
  expect(component.text()).toContain('Developed internal web pages for monitoring and report ');
});

test('renders work esperience', () => {
  const component = enzyme.shallow(<WorkSection work={workExperencies[1]}/>);

  expect(component.text()).toContain('May 2012');
  expect(component.text()).toContain('Software Developer');
  expect(component.text()).toContain('Introduced an improvement that sped up back end production by 40%.');

});
