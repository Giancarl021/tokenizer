const tokenizer = require('./index');

const sampleCommand = 'add 1, 2, 3, 4.5';

const sampleCode = `
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
`;

console.log(tokenizer.parseLine(sampleCommand));
console.log(tokenizer.parseCode(sampleCode));