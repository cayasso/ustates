#ustates

Mapping US state codes by index, name or abbreviation.

## Installation

```bash
$ npm install ustates
```

## Usage

```javascript
var states = require('ustates');

// by abbreviation:
console.log(states['GA']); //-> {"index":10,"name":"Georgia","code":"GA"}

// by index
console.log(states.index[45]); //-> {"index":45,"name":"Vermont","code":"VT"}

// by name
console.log(states.name['District Of Columbia']); //-> {"index":8,"name":"District Of Columbia","code":"DC"}
```

## License

(The MIT License)

Copyright (c) 2014 Jonathan Brumley &lt;cayasso@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY