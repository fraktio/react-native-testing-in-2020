import create from 'zustand';
import { combine } from 'zustand/middleware';
import * as R from 'ramda';

export type Person = {
  id: string;
  name: string;
  signedContract: string;
  praised: number;
};

const employees: Person[] = [
  {
    id: 'johan',
    name: 'JR',
    signedContract: '2016-01-17',
    praised: 10,
  },
  {
    id: 'joonas',
    name: 'Hauska Joonas',
    signedContract: '2012-01-02',
    praised: 2506,
  },
  {
    id: 'makkara',
    name: 'Puppe',
    signedContract: '2012-01-01',
    praised: 20,
  },
  {
    id: 'peksu',
    name: 'Tohtori',
    signedContract: '2012-01-01',
    praised: 20,
  },
  {
    id: 'koeajalla',
    name: 'Uustyyppi',
    signedContract: '2012-01-01',
    praised: 20,
  },
  {
    id: 'koeajalla2',
    name: 'Uustyyppi2',
    signedContract: '2012-01-01',
    praised: 20,
  },
  {
    id: 'koeajalla3',
    name: 'Uustyyppi3',
    signedContract: '2012-01-01',
    praised: 20,
  },
  {
    id: 'koeajalla4',
    name: 'Uustyyppi4',
    signedContract: '2012-01-01',
    praised: 20,
  },
];

export const useStore = create(
  combine(
    {
      employees,
    },
    (set) => ({
      praise: (id: string) =>
        set((state) => ({
          employees: R.over(
            R.lensPath([
              R.findIndex(R.propEq('id', id))(state.employees),
              'praised',
            ]),
            R.inc,
            state.employees,
          ),
        })),
    }),
  ),
);

enum Role {
  ceo = 'CEO',
  peasant = 'Peasant',
}

export type User = {
  username: string;
  role: Role;
};

type CredentialsState = {
  user: User | null;
  login: (user: UserCredentials) => void;
  logout: () => void;
};

export type UserCredentials = {
  username: string;
  password: string;
};

const verifyUser = ({ username, password }: UserCredentials): User | null => {
  if (username === 'joonas' && password === '10ksalary') {
    return {
      username,
      role: Role.ceo,
    };
  } else if (username === 'johan' && password === 'trainee') {
    return {
      username,
      role: Role.peasant,
    };
  }

  return null;
};

export const useCredentialsStore = create<CredentialsState>((set) => ({
  user: null,
  login: (credentials: UserCredentials) =>
    set((state) =>
      state.user === null
        ? {
            user: verifyUser(credentials),
          }
        : state,
    ),
  logout: () =>
    set(() => ({
      user: null,
    })),
}));
