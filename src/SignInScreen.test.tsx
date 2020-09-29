import { render } from '@testing-library/react-native';
import * as React from 'react';
import { SignInScreen } from './SignInScreen';

describe('<SignInScreen/> render test', () => {
  test('renders two inputs', () => {
    const { getByPlaceholderText } = render(<SignInScreen />);

    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
  });

  test('renders welcome text', () => {
    const { getByText } = render(<SignInScreen />);

    expect(getByText('Welcome to OurWorkplace')).toBeTruthy();
  });

  test('renders sign in button', () => {
    const { getByText } = render(<SignInScreen />);

    expect(getByText('Sign in')).toBeTruthy();
  });
});
