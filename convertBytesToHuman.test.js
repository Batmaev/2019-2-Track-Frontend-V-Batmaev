/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

import {convertBytesToHuman} from './convertBytesToHuman';
test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("").toBe(false));
  expect(convertBytesToHuman("s").toBe(false));
  expect(convertBytesToHuman("1024").toBe(false));
  expect(convertBytesToHuman(-1).toBe(false));
  expect(convertBytesToHuman(0.5).toBe(false));
  expect(convertBytesToHuman(-0.5).toBe(false));
  expect(convertBytesToHuman(null).toBe(false));
  expect(convertBytesToHuman(undefined).toBe(false));
  expect(convertBytesToHuman(NaN).toBe(false));
  expect(convertBytesToHuman(Infinity).toBe(false));
  expect(convertBytesToHuman(-Infinity).toBe(false));
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0).toBe("0 B"));
  expect(convertBytesToHuman(1).toBe("1 B"));
  expect(convertBytesToHuman(1024).toBe("1 KB"));
  expect(convertBytesToHuman(2.25*1024**5).toBe("2.3 PB"));
  expect(convertBytesToHuman(2.5 - 2.5).toBe("0 B"));
});

// другая группа проверок
