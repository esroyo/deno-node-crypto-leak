import { assert } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { getDigest } from './get-digest.ts';

Deno.test('should return a non-empty string when condition is true', () => {
    assert(getDigest(true));
});

Deno.test('should return undefined when condition is false', () => {
    assert(!getDigest(false));
});
