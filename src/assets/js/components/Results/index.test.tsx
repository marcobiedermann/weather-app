import React from 'react';
import renderer from 'react-test-renderer';
import Results from '.';
import resultsFixtures from './__fixtures__';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('components/Results', () => {
  it('renders correctly', () => {
    expect.assertions(1);

    const tree = renderer.create(<Results results={resultsFixtures} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
