var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  // it('it has a sample test', function(){
  //   assert.equal(true, true)
  // })

  // Unit Tests:

  // -calculator.add() - add 1 to 4 and get 5
  it('it can add 1 and 4 to get 5', function(){
    calculator.previousOperator = 1;
    calculator.previousTotal = calculator.previousOperator;
    calculator.add(4);
    assert.equal(calculator.runningTotal, 5)
    //   assert.equal(1+4, 5)
  })


  // -calculator.subtract() subtract 4 from 7 and get 3
  it('it can subtract 4 from 7 to get 3', function(){
    calculator.previousOperator = 7;
    calculator.previousTotal = calculator.previousOperator;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3)
    // assert.equal(7-4, 3)
  })

  // -calculator.multiply() - multiply 3 by 5 and get 15
  it('it can multiply 3 by 5 to get 15', function(){
    calculator.previousOperator = 3;
    calculator.previousTotal = calculator.previousOperator;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15)
    // assert.equal(3*5, 15)
  })

  // -calculator.divide() - divide 21 by 7 and get 3
  it('it can divide 21 by 7 to get 3', function(){
    calculator.previousOperator = 21;
    calculator.previousTotal = calculator.previousOperator;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3)
    // assert.equal(21/7, 3)
  })

  //
  // Integration Tests:
  //
  // -calculator.numberClick() - concatenate multiple number button clicks
  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(3);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 735)
  })

  // -calculator.operatorClick() - chain multiple operations together
  it('it can chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 10)
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 50)
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 25)
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 13)
    // assert.equal((((2+8)*5)/2)-12, 13)
  })


  // -calculator.clearClick() - clear the running total without affecting the calculation
  it('it can clear without affecting the calculation', function(){
    calculator.numberClick(2);
    // calculator.operatorClick('*');
    // calculator.clearClick();  //does not work on operators only on number clicks
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 10)
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 90)
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(2); //oesn't just clear the last number pushed but the entire last thing entered
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 99)
  })


  // Additional Tests To Check Further Functionality


  it('it needs equal operator clicked otherwise will only return last number', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    assert.equal(calculator.runningTotal, 8)
  })


  it('it can return a total as long as it ends with an operator (+)', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('+');
    assert.equal(calculator.runningTotal, 10)
  })



  it('it can return a total as long as it ends with an operator (*)', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('*');
    assert.equal(calculator.runningTotal, 10)
  })


  it('it can handle 2 operators being pushed without a number being entered in between', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*'); // just multiplies the running total/number entered by itself if no other number is entered between operators, have tested it and does the same with other operators (adds the number to itself, takes the number away from itself, divides the number by itself)
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 12)
  })


  it('it can handle multiple operators being pushed in sequence without numbers being entered between in the middle of a calculation', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(6); // =8
    calculator.operatorClick('*'); // =8*8 to get 64
    calculator.operatorClick('+'); // =64+64 to get 128
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 128)
  })


});




// WHY DOES THIS NOT WORK?????
// it('it can chain multiple operations together', function(){
//   calculator.previousOperator = 1;
//   calculator.previousTotal = calculator.previousOperator;
//   calculator.operatorClick('+');
//   calculator.numberClick(1);
//   calculator.operatorClick('+');
//   calculator.numberClick(8);
//   calculator.operatorClick('=')
//   assert.equal(calculator.runningTotal, 10)
// })
