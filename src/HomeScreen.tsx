import * as React from 'react';
import { View, Pressable, ScrollView, StyleSheet } from 'react-native';
import { DateTime } from 'luxon';
import { spacing } from './ds/spacing';
import * as Text from './ds/Text';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './App';
import { useStore } from './state';
import { Icon, IconName } from './ds/Icon';
import { Colors } from './ds/colors';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  let { employees } = useStore();

  return (
    <ScrollView>
      <View style={styles.container}>
        {employees.map((employee) => (
          <Pressable
            key={employee.name}
            onPress={() =>
              navigation.navigate('Details', {
                employee,
              })
            }>
            <View style={styles.card}>
              <Icon name={IconName.user} size={48} />
              <View style={styles.cardContent}>
                <Text.Title2>{employee.name}</Text.Title2>
                <Text.Regular color={Colors.textSecondary}>
                  Since:{' '}
                  {DateTime.fromISO(employee.signedContract).toLocaleString()}
                </Text.Regular>
                <Text.Regular color={Colors.textSecondary}>
                  Praised: {employee.praised}
                </Text.Regular>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: spacing.medium,
    marginBottom: spacing.large,
    padding: spacing.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: spacing.xsmall },
    shadowOpacity: 0.04,
    shadowRadius: spacing.xlarge,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    paddingStart: spacing.large,
  },
});
