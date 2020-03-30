import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';

describe('ListItem', () => {
  it('renders Season Item correcly', () => {
    const resource = {
      "name": "Dynasties - Season 1",
      "prices": {
        "buy": 1299,
        "rent": 499
      },
      "episodes": [
        "Chimpanzee",
        "Emperor Penguins",
        "Lion",
        "Painted Wolf",
        "Tiger"
      ],
      "description": "Dynasties is a documentary by Sir David Attenborough as he goes on a journey behind some of the most celebrated and endangered animals on the planet. Follow the stories of penguins, chimpanzees, lions, painted wolves, and tigers. "
    }
    const wrapper = shallow(<ListItem item={resource}/>)
    expect(wrapper.text().includes('Name: Dynasties - Season 1')).toBe(true);
    expect(wrapper.text().includes('Description: Dynasties is a documentary by Sir David Attenborough as he goes on a journey behind some of the most celebrated and endangered animals on the planet. Follow the stories of penguins, chimpanzees, lions, painted wolves, and tigers. ')).toBe(true);
    expect(wrapper.text().includes('Number of episodes: 5')).toBe(true);
    expect(wrapper.text().includes('Price (buy): 1299')).toBe(true);
    expect(wrapper.text().includes('Price (rent): 499')).toBe(true);
  })

  it('renders Film Item correcly', () => {
    const resource = {
      "name": "In the Mood for Love",
      "release": 2000,
      "prices": {
        "buy": 599,
        "rent": 199
      },
      "description": "In the Mood for Love is a 2000 Hong Kong romantic drama film written, produced, and directed by Wong Kar-wai. It tells the story of a man (played by Tony Leung) and a woman (Maggie Cheung) whose spouses have an affair together and who slowly develop feelings for each other."
    }
    const wrapper = shallow(<ListItem item={resource}/>)
    expect(wrapper.text().includes('Name: In the Mood for Love')).toBe(true);
    expect(wrapper.text().includes('Description: In the Mood for Love is a 2000 Hong Kong romantic drama film written, produced, and directed by Wong Kar-wai. It tells the story of a man (played by Tony Leung) and a woman (Maggie Cheung) whose spouses have an affair together and who slowly develop feelings for each other.')).toBe(true);
    expect(wrapper.text().includes('Number of episodes:')).toBe(false);
    expect(wrapper.text().includes('Price (buy): 599')).toBe(true);
    expect(wrapper.text().includes('Price (rent): 199')).toBe(true);
  })
})
