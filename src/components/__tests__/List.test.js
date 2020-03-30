import React from 'react';
import { mount } from 'enzyme';
import List from '../List';
import ListItem from '../ListItem.js'

describe('List', () => {
  it('renders Season List', () => {
    const state = {
      seasonsSelected: true,
      filmsSelected: false
    }
    const wrapper = mount(<List {...state} />)
    expect(wrapper.find(ListItem).length).toEqual(4);
    expect(wrapper.text().includes('Number of episodes:')).toBe(true);
  })

  it('renders Films List', () => {
    const state = {
      seasonsSelected: false,
      filmsSelected: true
    }
    const wrapper = mount(<List {...state} />)
    expect(wrapper.find(ListItem).length).toEqual(2);
    expect(wrapper.text().includes('Number of episodes:')).toBe(false);
  })
})
