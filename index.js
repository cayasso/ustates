const indexes = []
const names = {}
const states = {
  "AL":{"index":0,"name":"Alabama","code":"AL"},
  "AK":{"index":1,"name":"Alaska","code":"AK"},
  "AZ":{"index":2,"name":"Arizona","code":"AZ"},
  "AR":{"index":3,"name":"Arkansas","code":"AR"},
  "CA":{"index":4,"name":"California","code":"CA"},
  "CO":{"index":5,"name":"Colorado","code":"CO"},
  "CT":{"index":6,"name":"Connecticut","code":"CT"},
  "DE":{"index":7,"name":"Delaware","code":"DE"},
  "DC":{"index":8,"name":"District Of Columbia","code":"DC"},
  "FL":{"index":9,"name":"Florida","code":"FL"},
  "GA":{"index":10,"name":"Georgia","code":"GA"},
  "HI":{"index":11,"name":"Hawaii","code":"HI"},
  "ID":{"index":12,"name":"Idaho","code":"ID"},
  "IL":{"index":13,"name":"Illinois","code":"IL"},
  "IN":{"index":14,"name":"Indiana","code":"IN"},
  "IA":{"index":15,"name":"Iowa","code":"IA"},
  "KS":{"index":16,"name":"Kansas","code":"KS"},
  "KY":{"index":17,"name":"Kentucky","code":"KY"},
  "LA":{"index":18,"name":"Louisiana","code":"LA"},
  "ME":{"index":19,"name":"Maine","code":"ME"},
  "MD":{"index":20,"name":"Maryland","code":"MD"},
  "MA":{"index":21,"name":"Massachusetts","code":"MA"},
  "MI":{"index":22,"name":"Michigan","code":"MI"},
  "MN":{"index":23,"name":"Minnesota","code":"MN"},
  "MS":{"index":24,"name":"Mississippi","code":"MS"},
  "MO":{"index":25,"name":"Missouri","code":"MO"},
  "MT":{"index":26,"name":"Montana","code":"MT"},
  "NE":{"index":27,"name":"Nebraska","code":"NE"},
  "NV":{"index":28,"name":"Nevada","code":"NV"},
  "NH":{"index":29,"name":"New Hampshire","code":"NH"},
  "NJ":{"index":30,"name":"New Jersey","code":"NJ"},
  "NM":{"index":31,"name":"New Mexico","code":"NM"},
  "NY":{"index":32,"name":"New York","code":"NY"},
  "NC":{"index":33,"name":"North Carolina","code":"NC"},
  "ND":{"index":34,"name":"North Dakota","code":"ND"},
  "OH":{"index":35,"name":"Ohio","code":"OH"},
  "OK":{"index":36,"name":"Oklahoma","code":"OK"},
  "OR":{"index":37,"name":"Oregon","code":"OR"},
  "PA":{"index":38,"name":"Pennsylvania","code":"PA"},
  "RI":{"index":39,"name":"Rhode Island","code":"RI"},
  "SC":{"index":40,"name":"South Carolina","code":"SC"},
  "SD":{"index":41,"name":"South Dakota","code":"SD"},
  "TN":{"index":42,"name":"Tennessee","code":"TN"},
  "TX":{"index":43,"name":"Texas","code":"TX"},
  "UT":{"index":44,"name":"Utah","code":"UT"},
  "VT":{"index":45,"name":"Vermont","code":"VT"},
  "VA":{"index":46,"name":"Virginia","code":"VA"},
  "WA":{"index":47,"name":"Washington","code":"WA"},
  "WV":{"index":48,"name":"West Virginia","code":"WV"},
  "WI":{"index":49,"name":"Wisconsin","code":"WI"},
  "WY":{"index":50,"name":"Wyoming","code":"WY"}
}

Object.keys(states).forEach(code => {
  const state = states[code]
  indexes[state.index] = state
  names[state.name] = state
  names[state.name.toUpperCase()] = state
  names[state.name.toLowerCase()] = state
})

states.index = indexes
states.name = names

module.exports = states