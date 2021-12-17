import { render } from '@testing-library/react';
import React from 'react';
import Results from '..';
import resultsFixtures from '../__fixtures__';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('components/Results', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Results results={resultsFixtures} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
