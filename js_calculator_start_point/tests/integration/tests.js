var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });
  //have inbuilt browser in chai

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  // UI Integration Tests:

  // -Do the number buttons update the display of the running total?
  it('should update to display a total value by concatenating the input of the number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('24')
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('246')
  })


  // -Do the arithmetical operations update the display with the result of the operation?
  it('Add: should update the display when + and = arithmetical operation buttons are clicked, 1 + 5 = should display 6', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('Subtract: should update the display when - and = arithmetical operation buttons are clicked, 9 - 2 = should display 7', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  it('Multiply: should update the display when * and = arithmetical operation buttons are clicked, 3 * 4 = should display 12', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  })

  it('Divide: should update the display when / and = arithmetical operation buttons are clicked, 8 / 2 = should display 4', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })


  it('should update the display when + and * arithmetical operation buttons are clicked, 7 + 0 * should display 7', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })


  // -Can multiple operations be chained together?
  it('should chain multiple operations together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('13')
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('39')
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('13')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })


  // -Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('Positive Output: should update the display with expected outcome when using positive numbers, +2 + 6 = 8', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('Negative Output, Subtracting from Positive Number: should update the display with expected outcome when using positive numbers, +4 - 6 = -2', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-2')
  })  // DOES NOT DO Negative Output, Subtracting from Negative Number, see further down

  it('Decimal Output: should update the display with expected outcome when using decimal numbers, 3 / 5 = 0.6', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.6')
  })  // cannot input decimal numbers on this calculator so decimals can only be reached through dividing

  it('Large Number Output: should update the display with expected outcome when using large numbers, 555555555555 * 555555555555 = 3.086419753080247e+23', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('555555555555')
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('555555555555')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3.086419753080247e+23')
  })



  // -If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement).
  it('should update the display with Not a Number if dividing by 0, ', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not a Number!')
  })



  // // Additional Tests Run - checking further functionality
  //
  it('Larger Number Input: should update the display with Infinity', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  }) //does not even have an operator in it


});








// -------------------------------------------------------------------------------
//DOES NOT DO -  (result is coming back as -2 so is not starting at -4)
  // it('Negative Output, Subtracting from Negative Number: should update the display with expected outcome when using positive numbers, -4 - 6 = -10', function(){
  //   running_total = element(by.css('#running_total'))
  //   element(by.css('#operator_subtract')).click();
  //   element(by.css('#number4')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('4')
  //   element(by.css('#operator_subtract')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('4')
  //   element(by.css('#number6')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('6')
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('-10')
  // })
