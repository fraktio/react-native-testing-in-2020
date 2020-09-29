import { isRight } from 'fp-ts/lib/Either';
import { User } from './DetailsScreen';

describe('User test', () => {
  test('decode user', () => {
    const input = { name: 'Johan', role: 'peasant' };
    const decoded = User.decode(input);

    expect(isRight(decoded)).toBe(true);

    const input2 = { name: 'Johan', role: 'peasant tussi' };
    const decoded2 = User.decode(input2);

    expect(isRight(decoded2)).toBe(false);
  });
});
