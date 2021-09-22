'use strict';

// import object, class , promise ...
import {addConst} from './index.js'

// sample
describe('Sample', () => {
  test('1 + 1 should be 2', ()=>{
    expect(1+1).toBe(2);
  });
});


// testing promises
describe('Promises', () => {
  describe('Testing addConst', () => {
    test('addConst(1, 1) should return 2', () => {
      return addConst(1, 1).then((data) => expect(data).toBe(4));
    });
    test('addConst(1, 0) should return error "Not allowed"', () => {
      expect.assertions(1);
      return addConst(1, 0).catch((error) => expect(error.message).toBe('Not allowed'));
    });
    test('addConst(10,2) should return error "Not allowed', () => {
      expect.assertions(1);
      return addConst(10,2).catch((err) => expect(err.message).toBe('Not allowed'));
    });
  });

// testing setTimeout()
 jest.useFakeTimers();
describe('setTimeout', () => {
  test('setTimeout should wait 1500 milliseconds to launch request', () => {
    // jest.useFakeTimers();
    expect.assertions(2);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1500);
  });
});
// to clean up fake timming
afterEach(() => {
  jest.useRealTimers();
});

});
