import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  it ('When chose case lowercase', () =>{
    expect(changeStringCase('Live without regrets','lowercase')).toEqual('live without regrets');
  })
  it ('When chose case uppercase', () =>{
    expect(changeStringCase('Live without regrets','uppercase')).toEqual('LIVE WITHOUT REGRETS');
  })
  it (`When don't chose case`, () =>{
    expect(changeStringCase('Live without regrets','')).toEqual('Live without regrets');
  })
});

describe('sumOfArray()', () => {
  it ('When array of numbers', () =>{
    expect(sumOfArray([1,4,6,7,9])).toEqual(27);
  })
  it ('When array of numbers and symbols', () =>{
    expect(sumOfArray([1,4,6,'one',9,8,'two'])).toEqual(28);
  })
});

describe('divisibleBy()', () => {
  it ('When the array contains numbers that are divisible by the specified number', () =>{
    expect(divisibleBy([1,3,4,5,8,10,20],5)).toEqual([5,10,20]);
  })
  it ('When there are no numbers in the array that are divisible by the specified number', () =>{
    expect(divisibleBy([1,3,4,8],5)).toEqual([]);
  })
  it ('When there is at least one symbol in the array', () =>{
    expect(divisibleBy([1,3,4,5,'g',10,20],5)).toEqual([]);
  })
});

describe('addDotsToString()', () => {
  it ('When the string is greater  than the given value', () =>{
    expect (addDotsToString('Live without regrets',5)).toEqual('Li...');
  })
  it ('When the string is less than the given value', () =>{
    expect (addDotsToString('Live without regrets',50)).toEqual('Live without regrets');
  })
});

describe('objectEntries()', () => {
  it ('When object is given', () =>{
    expect (objectEntries({name: 'Mariia',lastname: 'Ulankina', age:27})).toEqual([['name','Mariia'], ['lastname','Ulankina'],['age', 27]]);
  })
  it ('When object is empty', () =>{
    expect (objectEntries({})).toEqual([]);
  })
  it ('When object has empty values', () =>{
    expect (objectEntries({name: '',lastname: '', age:''})).toEqual([['name',''], ['lastname',''],['age', '']]);
  })
});
