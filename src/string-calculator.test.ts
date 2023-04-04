import {StringCalculator} from "./String-Calculator";

describe('StringCalculator', () => {
  it('should return 0 if string empty', () => {
    const stringCalculator = new StringCalculator();

    expect(stringCalculator.add('')).toBe(0);
  });

  it('should return 1 if only 1 in query', () => {
    const stringCalculator = new StringCalculator();

    expect(stringCalculator.add('1')).toBe(1);
  });

  it('should add numbers if two of them', () => {
    const stringCalculator = new StringCalculator();

    expect(stringCalculator.add('1,2')).toBe(3);
  });

  it('should add numbers if more than two of them', () => {
    const stringCalculator = new StringCalculator();

    expect(stringCalculator.add('1,2,5')).toBe(8);
  });

  it('should add numbers if separator is newline or ,', () => {
    const stringCalculator = new StringCalculator();

    expect(stringCalculator.add('1,2\n5')).toBe(8);
  });

  it('should add numbers if 2 separators or chains', () => {
    const stringCalculator = new StringCalculator();

    expect(stringCalculator.add('1,\n2\n5')).toBe(8);
  });

  it('should throw if separator at the end of the string', () => {
    const stringCalculator = new StringCalculator();

    expect(() => stringCalculator.add('1,\n2\n5,')).toThrow();
  });
})
