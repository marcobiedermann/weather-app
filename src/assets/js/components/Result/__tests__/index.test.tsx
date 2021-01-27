import { render } from '@testing-library/react';
import React from 'react';
import Result from '..';
import resultFixtures from '../__fixtures__';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('components/Result', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const { asFragment } = render(<Result {...resultFixtures} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
