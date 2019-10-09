import {nonUniqueElements} from "./nonUniqueElements"

test('returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3])
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([])
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5])
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9])
})

test("returs false if arg is not an array", () => {
  expect(nonUniqueElements(2019)).toEqual(false)
  expect(nonUniqueElements(true)).toEqual(false)
  expect(nonUniqueElements(undefined)).toEqual(false)
})

/* test("maybe strings are arrays", () => {
  expect(nonUniqueElements("Hello, Pain and Despair!")).toEqual("ell ain an eai")
}) */
