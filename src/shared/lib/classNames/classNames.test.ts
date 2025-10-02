import { classNames } from './classNames';

describe('classNames', () => {
  test('with first argument', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with mods argument', () => {
    expect(
      classNames('someClass', { classTruly: true, classFalsy: false })
    ).toBe('someClass classTruly');
  });

  test('with additional argument', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      'someClass class1 class2'
    );
  });
});
