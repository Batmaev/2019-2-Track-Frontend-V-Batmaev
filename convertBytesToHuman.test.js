/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

import {convertBytesToHuman} from './convertBytesToHuman'

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("")).toBe(false)
  expect(convertBytesToHuman("s")).toBe(false)
  expect(convertBytesToHuman("1024")).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(0.5)).toBe(false)
  expect(convertBytesToHuman(-0.5)).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-Infinity)).toBe(false)
})

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe("0 B")
  expect(convertBytesToHuman(1)).toBe("1 B")
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(2.252*1024**5)).toBe("2.25 PB")
  expect(convertBytesToHuman(1024**2 - 2)).toBe("1 MB") 
  /* Не понимаю, почему этот тест не завален. 
  Я думал, что получится 1023.999, цикл с делениями завершится,
  получится 1023.999 КВ. Потом округлится и получится 1024 КВ. 
  Как программа узнала, что надо сделать ещё одну иерацию цикла? 
  Я думал, что надо будет написать костыль, 
  типа если после округления получилось 1024,
  то надо ++power и readable_bytes = 1 */

  expect(convertBytesToHuman(2.5 - 2.5)).toBe("0 B")
})

// другая группа проверок
