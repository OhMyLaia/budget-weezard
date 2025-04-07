export function idGenerator(): string {
    return crypto.randomUUID();
}

// console.log(`crypto.randomUUID() - ${crypto.randomUUID()}`);