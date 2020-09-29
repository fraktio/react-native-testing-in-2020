import * as React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { Colors } from './colors';
import { spacing } from './spacing';
import * as Text from './Text';

export const Button: React.FC<Omit<PressableProps, 'style'>> = ({
  children,
  ...props
}) => (
  <Pressable
    testID={
      props.testID || typeof children === 'string'
        ? (children as string)
        : undefined
    }
    style={styles.button}
    {...props}>
    <Text.Regular style={styles.text}>{children}</Text.Regular>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {},
  text: {
    color: Colors.brandPrimary,
    fontSize: 18,
    paddingTop: spacing.medium,
    paddingBottom: spacing.medium,
    fontWeight: '500',
  },
});
