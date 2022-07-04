import NormalFareCalculator from "../src/NormalFareCalculator"
import OvernightFareCalculator from "../src/OvernightFareCalculator"
import OvernightSundayFareCalculator from "../src/OvernightSundayFareCalculator"
import Ride from "../src/Ride"
import SundayFareCalculator from "../src/SundayFareCalculator"

let ride: Ride

beforeEach(function () {
  const normalFareCalculator = new NormalFareCalculator()
  const sundayFareCalculator = new SundayFareCalculator(normalFareCalculator)
  const overnightFareCalculator = new OvernightFareCalculator(sundayFareCalculator)
  const overnightSundayFareCalculator = new OvernightSundayFareCalculator(overnightFareCalculator)
  ride = new Ride(overnightSundayFareCalculator)
})

test("Deve retornar erro se a distancia for um valor invalido", function () {
  expect(() => ride.addSegment(-3, new Date("2021-03-01T10:00:00"))).toThrowError(new Error("Invalid distance"))
})

test("Deve retornar erro se a data for um valor invalido", function () {
  expect(() => ride.addSegment(10, new Date("aaa"))).toThrowError(new Error("Invalid date"))
})

test("Deve calcular o valor da corrida de uma corrida normal", function () {
  ride.addSegment(10, new Date("2021-03-01T10:00:00"))
  const fare = ride.finish()
  expect(fare).toBe(21)
})

test("Deve calcular o valor da corrida de uma corrida em horário noturno", function () {
  ride.addSegment(10, new Date("2021-03-01T23:00:00"))
  const fare = ride.finish()
  expect(fare).toBe(39)
})

test("Deve calcular o valor da corrida de uma corrida no domingo", function () {
  ride.addSegment(10, new Date("2021-03-07T10:00:00"))
  const fare = ride.finish()
  expect(fare).toBe(29)
})

test("Deve calcular o valor da corrida de uma corrida no domingo em horário noturno", function () {
  ride.addSegment(10, new Date("2021-03-07T23:00:00"))
  const fare = ride.finish()
  expect(fare).toBe(50)
})

test("Deve calcular o valor da corrida com a tarifa mínima", function () {
  ride.addSegment(1, new Date("2021-03-01T10:00:00"))
  const fare = ride.finish()
  expect(fare).toBe(10)
})
