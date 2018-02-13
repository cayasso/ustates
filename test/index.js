const assert = require('assert')
const states = require('../')

describe('ustates', () => {
  it('it should get state by abbreviation', () => {
    assert.deepEqual(states['GA'], {"index":10,"name":"Georgia","code":"GA"})
  })

  it('it should get state by index', () => {
    assert.deepEqual(states.index[45], {"index":45,"name":"Vermont","code":"VT"})
  })

  it('it should get state by name', () => {
    assert.deepEqual(states.name['District Of Columbia'], {"index":8,"name":"District Of Columbia","code":"DC"})
  })

  it('it should get state by uppercase name', () => {
    assert.deepEqual(states.name['DISTRICT OF COLUMBIA'], {"index":8,"name":"District Of Columbia","code":"DC"})
  })

  it('it should get state by lowercase name', () => {
    assert.deepEqual(states.name['district of columbia'], {"index":8,"name":"District Of Columbia","code":"DC"})
  })

})