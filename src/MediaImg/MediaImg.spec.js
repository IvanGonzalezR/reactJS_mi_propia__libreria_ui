import { getByTestId, render } from '@testing-library/react';
import MediaImg from './MediaImg';

describe('@Components/MediaImg', () => {
  it('should render successfully', () => {
    //arrange
    const { baseElement } = render(<MediaImg data-testid="media-img" src="img.com/dsads" alt="Platzinauta" />);
    //act
    const mediaImg = getByTestId(baseElement, 'media-img');
    //assert
    expect(baseElement).toBeDefined();
    expect(mediaImg).toHaveProperty('src', 'http://localhost/img.com/dsads')
  });
});

describe('@Components/MediaImg', () => {
  it('should have correct styles', () => {
    //arrange
    const { baseElement } = render(<MediaImg data-testid="media-img" src="img.com/dsads" alt="Platzinauta" />);
    //act
    const mediaImg = getByTestId(baseElement, 'media-img');
    const mediaImgStyles = getComputedStyle(mediaImg);
    //assert
    expect(mediaImgStyles.width).toBe('100px');
    expect(mediaImgStyles.height).toBe('100px');
    expect(mediaImgStyles.borderRadius).toBe('10%');
  });
});