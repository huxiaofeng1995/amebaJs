interface IDocumentParser {
    parse(path: string, input: string, callback: Function): void;
}

export {IDocumentParser};