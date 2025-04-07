interface ParseResult {
    operator: string,
    operands: (string | number | boolean | null | undefined)[];
}

export declare function parseCode(code: string): ParseResult[];
export declare function parseLine(line: string): ParseResult | null;

