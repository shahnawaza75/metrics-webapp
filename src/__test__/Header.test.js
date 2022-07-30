import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header ComponentTtest', () => {
  test('Output', () => {
    const header = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
