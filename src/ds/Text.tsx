import * as React from 'react';
import { Text, StyleSheet, TextProps as RNTextProps } from 'react-native';
import { Colors } from './colors';
import { spacing } from './spacing';

type TextProps = RNTextProps & { color?: Colors };

export const Title: React.FC<TextProps> = ({
  children,
  style,
  color = undefined,
  ...props
}) => (
  <Text style={[styles.title, { color }, style]} {...props}>
    {children}
  </Text>
);

export const Title2: React.FC<TextProps> = ({
  children,
  color,
  style,
  ...props
}) => (
  <Text style={[styles.title2, { color }, style]} {...props}>
    {children}
  </Text>
);

export const Regular: React.FC<TextProps> = ({
  children,
  color,
  style,
  ...props
}) => (
  <Text style={[styles.regular, { color }, style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600',
    paddingBottom: spacing.medium,
    color: Colors.textTitle,
  },
  title2: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: spacing.small,
    color: Colors.textTitle,
  },
  regular: {
    fontSize: 16,
    paddingBottom: spacing.xsmall,
    color: Colors.textPrimary,
  },
});
