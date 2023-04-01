import {FizzBuzz} from "./Fizz-Buzz";

describe('FizzBuzz', () => {
    it('answers fizz for multiple of 3', () => {
        const fizzBuzz = new FizzBuzz();
        const answer = fizzBuzz.convert(9)

        expect(answer).toBe('Fizz')
    })

    it('answers empty for not multiple of 3 or 5', () => {
        const fizzBuzz = new FizzBuzz();
        const answer = fizzBuzz.convert(7)
        expect(answer).toBe('')
    })

    it('answers buzz for multiple of 5', () => {
        const fizzBuzz = new FizzBuzz();
        const answer = fizzBuzz.convert(10)

        expect(answer).toBe('Buzz')
    })

    it('answer FizzBuzz for multiple of 3 and 5', () => {
        const fizzBuzz = new FizzBuzz();
        const answer = fizzBuzz.convert(15)

        expect(answer).toBe('FizzBuzz')
    })
})
