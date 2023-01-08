import { render, createRoot } from '@testing-library/react';
import Button from './Button';

describe('@components/Button', () => {
  it('Given a normal component call it should render component', () => {
    // Arrange
    const { getByRole } = render(
      <Button
        type='button'
        bgColor='red'
      />
    );
    // Act
    const button = getByRole('button');
    // Assert
    expect(button).toBeDefined();
  })
});

describe('@components/Button', () => {
  it('Check if the button has a prop of type', () => {
    // Arrange

    const { getByRole } = render(
      <Button
        type='button'
        bgColor='red'
      />
    );
    // Act
    const button2 = getByRole('button');
    // Assert
    expect(button2).toHaveProperty('type', 'button');
  })
});