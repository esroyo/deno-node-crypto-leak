import { createHash } from 'node:crypto';

export function getDigest(condition: boolean): string | undefined {
    const hash = createHash('sha256');
    if (condition) {
        return hash.update('xyzzy').digest('base64');
    }
    // When explicitly finishing the stream, no leak happens
    // hash.end();
}
