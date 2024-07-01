import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizz-buzz";

describe('fizzbuzz as function', () => {

     it('number divisible by tree should return <Fizz>', () => {
          //Given
          const num = 3
          const expected = 'Fizz'
          //When
          const result = fizzbuzz(num)
          //Then
          expect(result).toBeTypeOf('string')
          expect(result).toEqual(expected)


     })
     it('number divisible by five should return <Buzz>', () => {

          //Given
          const num = 5
          const expected = 'Buzz'
          //When
          const result = fizzbuzz(num)
          //Then
          expect(result).toBeTypeOf('string')
          expect(result).toEqual(expected)
     })

     it('number divisible by three and five should return <FizzBuzz>', () => {
          //Given
          const num = 15
          const expected = 'FizzBuzz'
          //When
          const result = fizzbuzz(num)
          //Then
          expect(result).toBeTypeOf('string')
          expect(result).toEqual(expected)
     })

})