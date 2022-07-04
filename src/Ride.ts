import NormalFareCalculator from "./NormalFareCalculator";
import OvernightFareCalculator from "./OvernightFareCalculator";
import OvernightSundayFareCalculator from "./OvernightSundayFareCalculator";
import Segment from "./Segment";
import SundayFareCalculator from "./SundayFareCalculator";

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
      if (segment.isOvernight() && !segment.isSunday()) {
        const fareCalculator = new OvernightFareCalculator()
        fare += fareCalculator.calculate(segment)
        continue
      }
      if (segment.isOvernight() && segment.isSunday()) {
        const fareCalculator = new OvernightSundayFareCalculator()
        fare += fareCalculator.calculate(segment)
        continue
      }
      if (segment.isSunday()) {
        const fareCalculator = new SundayFareCalculator()
        fare += fareCalculator.calculate(segment)
        continue
      }
      const fareCalculator = new NormalFareCalculator()
      fare += fareCalculator.calculate(segment)
    }
    return (fare < this.MINIMAL_FARE) ? this.MINIMAL_FARE : fare
  }
}
