import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import List from '../components/List'
import ListItem from '../components/ListItem'

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />)
});

afterEach(() => {
  wrapper.unmount();
});

it('renders without crashing and show header, buttons and initial list correcly', () => {
  expect(wrapper.text().includes('React coding challenge')).toBe(true);
  expect(wrapper.text().includes('Candidate: Lucas Hauptmann Pereira')).toBe(true);
  expect(wrapper.find('input').length).toEqual(2);
  expect(wrapper.find(List).length).toEqual(1);
})

it('mounts component with the right state set', () => {
  expect(wrapper.state('filmsSelected')).toBe(true);
  expect(wrapper.state('seasonsSelected')).toBe(false);
})

it('checks if handleSeasonsClick is called when \' TV Seasons \' button is clicked', () => {
  const instance = wrapper.instance();

  jest.spyOn(instance, 'handleSeasonsClick').mockImplementation(() => {
    return jest.fn();
  });
  wrapper.find('input').at(1).simulate('click');
  expect(instance.handleSeasonsClick).toHaveBeenCalled();
});

it('checks if handleFilmsClick is called when \' TV Seasons \' button is clicked', () => {
  const instance = wrapper.instance();

  jest.spyOn(instance, 'handleFilmsClick').mockImplementation(() => {
    return jest.fn();
  });
  wrapper.setState({ filmsSelected: false, seasonsSelected: true });
  wrapper.update();
  wrapper.find('input').at(0).simulate('click');
  expect(instance.handleFilmsClick).toHaveBeenCalled();
});

it('tests component state change when TV Seasons button is clicked', () => {
  expect(wrapper.state('filmsSelected')).toBe(true);
  expect(wrapper.state('seasonsSelected')).toBe(false);
  expect(wrapper.find(ListItem).length).toEqual(2);
  wrapper.find('input').at(1).simulate('click');
  wrapper.update();
  expect(wrapper.find(ListItem).length).toEqual(4);
  expect(wrapper.state('filmsSelected')).toBe(false);
  expect(wrapper.state('seasonsSelected')).toBe(true);
})

it('tests component state change when Films button is clicked', () => {
  wrapper.setState({ filmsSelected: false, seasonsSelected: true });
  wrapper.update();
  expect(wrapper.state('filmsSelected')).toBe(false);
  expect(wrapper.state('seasonsSelected')).toBe(true);
  expect(wrapper.find(ListItem).length).toEqual(4);
  wrapper.find('input').at(0).simulate('click');
  wrapper.update();
  expect(wrapper.find(ListItem).length).toEqual(2);
  expect(wrapper.state('filmsSelected')).toBe(true);
  expect(wrapper.state('seasonsSelected')).toBe(false);
})
