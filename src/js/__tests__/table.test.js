import orderByProps from '../table';

test.each([
  [
    ['level', 'name'], [
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    ['name', 'level'], [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    ['health', 'defence', 'name'], [
      { key: 'health', value: 10 },
      { key: 'defence', value: 40 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'level', value: 2 },
    ],
  ],
])('Cортировка характеристик', (setOrder, expectedResult) => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  expect(orderByProps(obj, setOrder)).toEqual(expectedResult);
});
