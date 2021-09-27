import {greet} from "./greet";

describe('greet', () => {
  it('should include name and return message',  () => {
    expect(greet('Angular')).toContain('Angular')
  });
})
