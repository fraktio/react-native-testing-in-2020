import * as React from 'react';
import RNVIcon from 'react-native-vector-icons/Feather';
import { IconProps } from 'react-native-vector-icons/Icon';

export enum IconName {
  settings = 'settings',
  list = 'list',
  user = 'user',
}

export const Icon: React.FC<{ name: IconName } & IconProps> = ({
  name,
  ...props
}) => <RNVIcon name={name} size={30} color="tomato" {...props} />;
