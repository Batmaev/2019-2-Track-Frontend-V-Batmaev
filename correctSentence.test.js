test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends").toBe("Greetings, friends."))
  expect(correctSentence("Greetings, friends").toBe("Greetings, friends."))
  expect(correctSentence("Greetings, friends.").toBe("Greetings, friends."))
});

test('empty string -> empty string', () =>{
  expect(correctSentence('').toBe(''))
});

test("Wrong types", () => {
  expect(correctSentence(-1).toBe(false))
  expect(correctSentence(true).toBe(false))
  expect(correctSentence(undefined).toBe(false))
  expect(correctSentence(null).toBe(false))
  expect(correctSentence(NaN).toBe(false))
});

test("First symbol is not a letter", () => {
  expect(correctSentence("2 + 2 = 3").toBe("2 + 2 = 3."))
  expect(correctSentence("2 + 2 = 3??").toBe("2 + 2 = 3??"))
  expect(correctSentence(" hah ").toBe(" hah ."))
  expect(correctSentence("-2").toBe("-2."))
  expect(correctSentence("_$! ").toBe("_$! ."))
});
