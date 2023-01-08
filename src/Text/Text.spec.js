import { getByTestId, render } from '@testing-library/react';
import Text from './Text';

describe('@Component/Text', () => {
  it('Should be defined', () => {
    const { container } = render(<Text data-testid="text" component="h1">Ealee</Text>);

    const text = getByTestId(container, 'text');

    expect(text).toBeDefined();
  });
});