const solution = require('./solution.js');

describe('solution', () => {
  it('should return the correct sum of values for each day of the week', () => {
    const input = {
      '2020-01-01': 4,
      '2020-01-02': 4,
      '2020-01-03': 6,
      '2020-01-04': 8,
      '2020-01-05': 2,
      '2020-01-06': -6,
      '2020-01-07': 2,
      '2020-01-08': -2
    };
    const expectedOutput = {
      'Mon': -6,
      'Tue': 2,
      'Wed': 2,
      'Thu': 4,
      'Fri': 6,
      'Sat': 8,
      'Sun': 2
    };
    expect(solution(input)).toEqual(expectedOutput);
  });

  it('should handle missing days in the input dictionary', () => {
    const input = {
      '2020-01-01': 6,
      '2020-01-04': 12,
      '2020-01-05': 14,
      '2020-01-06': 2,
      '2020-01-07': 4
    };
    const expectedOutput = {
      'Mon': 2,
      'Tue': 4,
      'Wed': 6,
      'Thu': 8,
      'Fri': 10,
      'Sat': 12,
      'Sun': 14
    };
    expect(solution(input)).toEqual(expectedOutput);
  });
});
