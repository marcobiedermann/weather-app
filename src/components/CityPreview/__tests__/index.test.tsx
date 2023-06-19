import { describe, expect, it } from 'vitest';
import CityPreview from '..';
import { render } from '../../../__test__/testing-library';
import cityFixtures from '../../City/__fixtures__';

describe('components/CityPreview', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<CityPreview {...cityFixtures} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
