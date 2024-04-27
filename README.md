# Homebox
A web dev project for software engineering project course.

Milestones are used to divide issues between sprints in a scrum-but manner. 

Wiki pages for documentation and this ReadMe file for direct project-related information.


## Setup instructions 

Instructions for launching Next.js and NestJS within /frontend and /backend.  

## Tests

# Testing Guide

This project uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit testing.

# Running Tests

To run the tests, use the following command:

```bash
npm test
```

# Writing Tests

Tests are located in test-folder. All tests have component names with .test.js extension.

Basic structure of unit test file: 

```bash
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './Component'; // replace with path to component

describe('Component', () => {
  test('renders Component component without crashing', () => {
    render(<Component />);
    // Add your assertions here
  });

  // Add more tests as needed
});
```

# Requirements

1) To implement a cost-calculator form for short-term rental to calculate rental costs. It asks for rental duration, package choice (Standard or Premium), apartment size, and contact info. Then, it gives an estimated price and allows ordering. Short-term form is used for rentals from 3 to 10 months.

2) To implement a cost-calculator form for long-term rental to calculate rental costs. It asks how long you want to rent, your budget, how many bedrooms you need, and their sizes (small/medium/large). You can choose a package level (Standard/Premium) and provide more details about the apartment if needed. After that, it gives you an estimated price right away and lets you place an order." 

3) To implement a page for businesses packages. It should explain services for businesses, the process that is offered, and include a contact form for inquiries.

4) To implement a contact page with contact form.

| Requirement | Test file |  
| ------ | ------ |  
| Functional cost calculator | [MERGED] |  
| Short-term form | [MERGED] |  
| Long-term form | [MERGED] |  
| Contact page | [MERGED]  | 

## Data objects
  
[A short description of JSON sent by cost calculator]

This is Work In Progress, but something along the lines:  
{
source: "multi_step_order"
furnishingLevel: "Standard",
location: "place",
roomChoices: {
   -bedroom1: {
      size: "small"
},
-livingroom: {
     size: "medium
}
},
-rentalStart: "timecontent",
-rentalLength: "lengthcontent"
name: "content",
email: "content",
textField: "content",
phone: number,
budget: number
}

## Navigation diagram

![Initial navigation draft](navgraphs/NavDraft.drawio.png)

## Wireframe illustrations

Initial design  
[The first wireframes](navgraphs/Wireframes.pdf)   
Cost calculator multi-step design:    
[Wireframes for cost calculator](https://www.figma.com/file/8lIQboSjwVDg92p4fYcRmp/Untitled?type=design&node-id=0%3A1&mode=design&t=L9L6uzjHahvbiYqo-1)

## People


| Role | Name |  
| ------ | ------ |  
| Project manager  | Iivari Karrila  |  
| Test manager  | Kaisa Kauhanen |  
|Developer | Lotte Karlsson |
|Developer | Inka Ratia |
|Developer | Johanna Meskanen |
|Developer | Saana Hänninen |
|UI/UX designer | Kuura Ahola |


