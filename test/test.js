var assert = require('assert')
  , states = require('../');

describe('ustates', function () {

  it('it should get state by abbreviation', function () {
    assert.deepEqual(states['GA'], {"index":10,"name":"Georgia","code":"GA"});
  });

  it('it should get state by index', function () {
    assert.deepEqual(states.index[45], {"index":45,"name":"Vermont","code":"VT"});
  });

  it('it should get state by name', function () {
    assert.deepEqual(states.name['District Of Columbia'], {"index":8,"name":"District Of Columbia","code":"DC"});
  });

  it('it should get state by uppercase name', function () {
    assert.deepEqual(states.name['DISTRICT OF COLUMBIA'], {"index":8,"name":"District Of Columbia","code":"DC"});
  });

  it('it should get state by lowercase name', function () {
    assert.deepEqual(states.name['district of columbia'], {"index":8,"name":"District Of Columbia","code":"DC"});
  });

});