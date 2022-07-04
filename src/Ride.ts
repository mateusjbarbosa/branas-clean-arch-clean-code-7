import FareCalculatorFactory from "./FareCalculatorFactory";
import Segment from "./Segment";

export default class Ride {
  segments: Segment[] = []
  MINIMAL_FARE = 10

  constructor() { }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date))
  }

  finish() {
    let fare = 0
    for (const segment of this.segments) {
      const fareCalculator = FareCalculatorFactory.create(segment)
      fare += fareCalculator.calculate(segment)
    }
    return (fare < this.MINIMAL_FARE) ? this.MINIMAL_FARE : fare
  }
}
