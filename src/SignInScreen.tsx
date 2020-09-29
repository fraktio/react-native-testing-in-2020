import * as React from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import * as Text from './ds/Text';
import { Button } from './ds/Button';
import { useCredentialsStore } from './state';
import { TextInput as RNTextInput } from 'react-native';
import { spacing } from './ds/spacing';
import { Colors } from './ds/colors';

const TextInput: React.FC<TextInputProps> = ({ ...props }) => (
  <RNTextInput testID={props.accessibilityLabel} {...props} />
);

export function SignInScreen() {
  let { login } = useCredentialsStore();
  let [username, setUsername] = React.useState('');
  let [password, setPassword] = React.useState('');
  let error = null;

  return (
    <View style={styles.container}>
      <Text.Title>Welcome to OurWorkplace</Text.Title>

      <TextInput
        accessibilityLabel="username"
        selectionColor={Colors.brandPrimary}
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        placeholderTextColor={Colors.faded}
      />
      <TextInput
        accessibilityLabel="password"
        selectionColor={Colors.brandPrimary}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor={Colors.faded}
      />
      <Button
        testID="Sign in button"
        onPress={() => login({ username, password })}>
        Sign in
      </Button>
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
  input: {
    fontWeight: '500',
    width: '100%',
    fontSize: 18,
    borderColor: Colors.inputBorder,
    borderWidth: 3,
    borderRadius: spacing.small,
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.medium,
    marginBottom: spacing.medium,
  },
});
