import { render } from '@testing-library/react';
import ContainerFlex from './ContainerFlex';

describe('@Components/ContainerFlex', () => {
  it('Check if ContainerFlex is defined', () => {
    //arrange
    const { getByRole } = render(<ContainerFlex role="banner" />)
    //act
    const containerFlexTest = getByRole('banner');
    //assert
    expect(containerFlexTest).toBeDefined();
  })
});

describe('@Components/ContainerFlex', () => {
  it('bgColor is red or blue', () => {
    //arrange
    const { getByRole } = render(<ContainerFlex role="banner" bgColor="red" />)
    //act
    const containerFlexTest = getByRole('banner');
    const containerStyles = getComputedStyle(containerFlexTest);
    //assert
    expect(containerStyles.backgroundColor).toBe('red');
  }),
    it('Check if bgColor is blue', () => {
      //arrange
      const { getByRole } = render(<ContainerFlex role="banner" bgColor="blue" />)
      //act
      const containerFlexTest = getByRole('banner');
      const containerStyles = getComputedStyle(containerFlexTest);
      //assert
      expect(containerStyles.backgroundColor).toBe('blue');
    })
});
