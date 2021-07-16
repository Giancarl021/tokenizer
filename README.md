# Tokenizer

### Installation

npm:

```bash
npm install --save @giancarl021/tokenizer
```

Yarn:

```bash
yarn add @giancarl021/tokenizer
```

### Usage: ``parseCode``

#### Input

```txt
config:start
    allow 1, 2, 3
    deny 4, 5, 6
config:end
start
    command1 true, false, 'true', 'false'
    command2 text, broken, 'text, but not broken'
    # command3 param1, param2, param3
    command4 123, 123.34, '123.34', 192.168.0.1
    command5 null, undefined, 'null', 'undefined'
end
```

#### Code

```javascript
const tokenizer = require('@giancarl021/tokenizer');

const input = '...';

const output = tokenizer.parseCode(input);

console.log(output);
```

#### Output

```javascript
[
  { operator: 'config:start', operands: [] },
  { operator: 'allow', operands: [ 1, 2, 3 ] },
  { operator: 'deny', operands: [ 4, 5, 6 ] },
  { operator: 'config:end', operands: [] },
  { operator: 'start', operands: [] },
  { operator: 'command1', operands: [ true, false, 'true', 'false' ] },
  { operator: 'command2', operands: [ 'text', 'broken', 'text, but not broken' ] },
  { operator: 'command4', operands: [ 123, 123.34, '123.34', '192.168.0.1' ] },
  { operator: 'command5', operands: [ null, undefined, 'null', 'undefined' ] },
  { operator: 'end', operands: [] }
]
```

### Usage: ``parseLine``

#### Input

```txt
add 1, 2, 3, 4.5
```

#### Code

```javascript
const tokenizer = require('@giancarl021/tokenizer');

const input = '...';

const output = tokenizer.parseLine(input);

console.log(output);
```

#### Output

```javascript
{ operator: 'add', operands: [ 1, 2, 3, 4.5 ] }
```