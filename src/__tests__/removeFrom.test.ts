import removeFrom from '../removeFrom';

const ARRAY = [{ id: 1 }, { id: 2 }, { id: 3 }];
const RESULT_ARRAY = [{ id: 1 }, { id: 3 }];

const OBJECT = {
  firstName: 'Evyatar',
  lastName: 'Shafran',
};
const RESULT_OBJECT = {
  firstName: 'Evyatar',
};

test('Remove an item from an array', () => {
  expect(
    removeFrom(ARRAY, (item: { id: number }) => item.id === 2),
  ).toStrictEqual(RESULT_ARRAY);
});

test('Remove a property from an object (by key)', () => {
  expect(removeFrom(OBJECT, 'lastName')).toStrictEqual(RESULT_OBJECT);
});

test('Remove an property from an object (by finder)', () => {
  expect(
    removeFrom(OBJECT, (value: string) => value === 'Shafran'),
  ).toStrictEqual(RESULT_OBJECT);
});
