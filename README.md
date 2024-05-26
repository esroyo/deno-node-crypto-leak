## Deno leak when using `node:crypto`

The leak is reported by Deno 1.43.6 when a `Hash` instance is created and never used at all.

To reproduce run: `deno test` 

```
error: Leaks detected:
  - "cryptoDigest" was created during the test, but not cleaned up during the test. Close the resource before the end of the test.
```
