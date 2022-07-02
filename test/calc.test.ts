import { calc } from "../src/calc"

test("Deve retornar -1 se a distancia for um valor invalido", function () {
  const segments = [{ dist: -3, ds: new Date("2021-03-01T10:00:00") }]

  const fare = calc(segments)

  expect(fare).toBe(-1)
})

test("Deve retornar -2 se a data for um valor invalido", function () {
  const segments = [{ dist: 10, ds: new Date("aaa") }]

  const fare = calc(segments)

  expect(fare).toBe(-2)
})

test("Deve calcular o valor da corrida de uma corrida normal", function () {
  const segments = [{ dist: 10, ds: new Date("2021-03-01T10:00:00") }]

  const fare = calc(segments)

  expect(fare).toBe(21)
})

test("Deve calcular o valor da corrida de uma corrida em horário noturno", function () {
  const segments = [{ dist: 10, ds: new Date("2021-03-01T23:00:00") }]

  const fare = calc(segments)

  expect(fare).toBe(39)
})

test("Deve calcular o valor da corrida de uma corrida no domingo", function () {
  const segments = [{ dist: 10, ds: new Date("2021-03-07T10:00:00") }]

  const fare = calc(segments)

  expect(fare).toBe(29)
})

test("Deve calcular o valor da corrida de uma corrida no domingo em horário noturno", function () {
  const segments = [{ dist: 10, ds: new Date("2021-03-07T23:00:00") }]

  const fare = calc(segments)

  expect(fare).toBe(50)
})

test("Deve calcular o valor da corrida com a tarifa mínima", function () {
  const segments = [{ dist: 1, ds: new Date("2021-03-01T10:00:00") }]

  const fare = calc(segments)

  expect(fare).toBe(10)
})