import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { DateTime } from 'luxon';
import * as Text from './ds/Text';
import { StackScreenProps } from '@react-navigation/stack';
import * as R from 'ramda';
import { RootStackParamList } from './App';
import { Person, useStore } from './state';
import { Button } from './ds/Button';

import { isRight } from 'fp-ts/lib/Either';
import * as D from 'io-ts/Decoder';

export const User = D.type({
  name: D.string,
  role: D.union(D.literal('ceo'), D.literal('peasant')),
});

export type User = D.TypeOf<typeof User>;

const getUser = () => {
  const user = { name: 'johan', role: 'peasant' };
  return User.decode(user);
};

type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

export function DetailsScreen({ route }: DetailsScreenProps) {
  let { employee } = route.params;
  let { employees, praise } = useStore();
  let person = R.find<Person>(R.propEq('id', employee.id))(employees);
  let [_user, setUser] = React.useState<User | null>(null);
  let [_error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const user = getUser();

    isRight(user)
      ? setUser(user.right)
      : (setUser(null), setError('cannot fetch user'));
  }, []);

  return (
    <ScrollView>
      {!person ? (
        <Text.Regular>Person not found with id {employee.id}</Text.Regular>
      ) : (
        <View style={styles.container}>
          <Text.Regular>
            Signed contract:{' '}
            {DateTime.fromISO(employee.signedContract).toLocaleString()}
          </Text.Regular>
          <Text.Regular>Has been praised: {person.praised}</Text.Regular>
          <Button onPress={() => person && praise(person.id)}>
            Praise for good work
          </Button>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
