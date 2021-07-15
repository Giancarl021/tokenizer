module.exports = function (line) {
    const trimmed = line.trim();

    if (trimmed === '') {
        return null;
    }

    const operator = trimmed.replace(/\s.*$/, '');

    if (trimmed.startsWith('#')) {
        return null;
    }

    if (operator === trimmed) {
        return { operator, operands: [] };
    }

    const operands = trimmed
        .replace(operator + ' ', '')
        .split(/,(?=(?:(?:[^']*'){2})*[^']*$)/)
        .map(e => e.trim())
        .map(e => e === 'true' ? true : (e === 'false' ? false : e))
        .map(e => e === 'null' ? null : (e === 'undefined' ? undefined : e))
        .map(e => /^(\d+|\d+\.\d+)$/.test(e) ? Number(e) : e)
        .map(e => typeof e === 'string' ? e.replace(/(^')|('$)/g, '') : e);

    return { operator, operands };
}