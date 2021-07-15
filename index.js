const lineTokenizer = require('./src/line');

module.exports = {
    parseCode(code) {
        const lines = code.split('\n');

        const program = [];

        for (const line of lines) {
            const tokens = lineTokenizer(line);
            if (tokens)
                program.push(tokens);
        }

        return program;
    },

    parseLine(line) {
        return lineTokenizer(line);
    }
}