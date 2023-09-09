const exercise = require("../exercise1");

describe("fizzBuzz", () => {
    it("should throw if input is not a number", () => {
        expect(() => { exercise.fizzBuzz("1") }).toThrow();
    });

    it("should return FIzzBuzz if number is divisible by 3 & 5", () => {
        const result = exercise.fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    });

    it("should return Fizz if number is only divisible by 3", () => {
        const result = exercise.fizzBuzz(6);
        expect(result).toBe("Fizz");
    });

    it("should return Buzz if number is only divisible by 3", () => {
        const result = exercise.fizzBuzz(10);
        expect(result).toBe("Buzz");
    });

    it("should return input if number is not divisible by 3 or 5", () => {
        const result = exercise.fizzBuzz(11);
        expect(result).toBe(11);
    });

});