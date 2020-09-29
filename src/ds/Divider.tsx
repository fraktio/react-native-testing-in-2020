import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { spacing } from './spacing';

export const Divider: React.FC = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginVertical: spacing.large,
  },
});
