const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');



describe('fizzBuzzer', function () {

  // *** NOTE AFTER LOOKING AT SOLUTION I REALIZED I
  // SHOULD BREAK UP MY TESTING A LITTLE MORE
  // ***
  //describe what fizzBuzzer should do
  it(`takes a num and should return fizz-buzz for 
    nums div by 15, return buzz for nums div by 5, fizz for nums div by 
    3 and the num otherwise`, 
  function () {
    // Test cases for nums div by 15, 5, 3 and some not div by 15, 5, 3
    const normalCases= [
      {input: 15, expected: 'fizz-buzz'},
      {input: 5, expected: 'buzz'},
      {input: 3, expected: 'fizz'},
      {input: 6, expected: 'fizz'},
      {input: 10, expected: 'buzz'},
      {input: 30, expected: 'fizz-buzz'},
      {input: 2, expected: 2},
      {input: 7, expected: 7},
      {input: 101, expected: 101}
    ];

    // Each input should equal the expected value
    normalCases.forEach(normalCase => {
      const answer = fizzBuzzer(normalCase.input);
      expect(answer).to.equal(normalCase.expected);
    });
  });

  it('should produce error if input isn\'t number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3], null];
    badInputs.forEach((input) => {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
