import React from 'react';
import 'jest';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
enzyme.configure({ adapter: new Adapter() });
import SkillSection from '../frontend/components/skillsection/SkillSection';
import { skills } from '../frontend/components/cv/CvText';

test('renders JS skills', () => {
  const component = enzyme.shallow(<SkillSection skill={skills[0]}/>);

  expect(component.text()).toContain('Redux');
  expect(component.text()).toContain('JavaScript');
  expect(component.text()).toContain('React');
  expect(component.text()).toContain('Node');
});

test('renders Java skills', () => {
  const component = enzyme.shallow(<SkillSection skill={skills[1]}/>);

  expect(component.text()).toContain('Java');
  expect(component.text()).toContain('Spring');
  expect(component.text()).toContain('Hibernate');
  expect(component.text()).toContain('Maven');
});
