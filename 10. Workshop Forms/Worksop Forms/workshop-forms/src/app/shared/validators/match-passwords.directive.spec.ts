import { MatchPasswordsDirective } from '../utils/match-passwords-validator';

describe('MatchPasswordsDirective', () => {
  it('should create an instance', () => {
    const directive = new MatchPasswordsDirective();
    expect(directive).toBeTruthy();
  });
});
