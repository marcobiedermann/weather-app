import React from 'react';
import renderer from 'react-test-renderer';
import Result from '.';
import resultFixtures from './__fixtures__';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('components/Result', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Result {...resultFixtures} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
