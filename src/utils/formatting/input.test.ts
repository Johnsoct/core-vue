// Packages
import {
  describe,
  expect,
  test,
} from 'vitest';
// Helpers
import {
  cleanUserInput,
} from './input';

describe('cleanUserInput', () => {
  test('cleanUserInput', () => {
    expect(cleanUserInput('1,234.45')).to.be.equal('1234.45');
    expect(cleanUserInput('1,2,3,4.4,5')).to.be.equal('1234.45');
    expect(cleanUserInput('1,2,3,4..4,5')).to.be.equal('1234..45');
    expect(cleanUserInput('1,2,3,4.4.5')).to.be.equal('1234.4.5');
    expect(cleanUserInput('123,3.45,,,,,,,,')).to.be.equal('1233.45');
    expect(cleanUserInput(null)).to.be.equal('');
    expect(cleanUserInput(100)).to.be.equal('100');
    expect(cleanUserInput(10000.6123)).to.be.equal('10000.6123');
    expect(cleanUserInput('25ff')).to.be.equal('25');
    expect(cleanUserInput('.40')).to.be.equal('0.40');
    expect(cleanUserInput('.')).to.be.equal('0.');
    expect(cleanUserInput('25,ff25.25')).to.be.equal('2525.25');
    expect(cleanUserInput('-$1,300.25')).to.be.equal('1300.25');
    expect(cleanUserInput('-$1,300.25', true)).to.be.equal('-1300.25');
    expect(cleanUserInput('-$1,3-00.25', true)).to.be.equal('-1300.25');
    expect(cleanUserInput('--$1,3-00.25', true)).to.be.equal('-1300.25');
    expect(cleanUserInput('-1,3-00.25', true)).not.to.be.equal('-1300.25');
    expect(cleanUserInput(' - $1.00', true)).to.be.equal('-1.00');
    expect(cleanUserInput('-$100.00', true)).to.be.equal('-100.00');
    expect(cleanUserInput('-100.00', true)).not.to.be.equal('-100.00');
  });
});
