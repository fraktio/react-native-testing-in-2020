import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Text from './ds/Text';
import { Button } from './ds/Button';
import { useCredentialsStore } from './state';
import { Colors } from './ds/colors';

export function SettingsScreen() {
  let { user, logout } = useCredentialsStore();

  return (
    <View style={styles.container}>
      <Text.Title>{user?.username}</Text.Title>
      <Text.Regular color={Colors.faded}>You are {user?.role}</Text.Regular>
      <Button onPress={() => logout()}>Sign out</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
