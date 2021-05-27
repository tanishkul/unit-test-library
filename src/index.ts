import { describe, expect, it } from './utilities';

const add = (x, y) => x + y;

// Testing for above functions
describe('test cases for some Math functions', () => {
  it('should add two numbers', () => {
    expect(add(4, 4)).toBe(8);
  });
});
